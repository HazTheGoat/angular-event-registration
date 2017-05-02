import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ApiService {
  userId: string;
  fullName: string;
  email: string;
  photoURL: string;
  
  constructor(private af: AngularFire) { }

  getEvent(eventId):FirebaseObjectObservable<any>{
    return this.af.database.object('/events/' + eventId);
  }

  getEvents():FirebaseListObservable<any> {
    return this.af.database.list('/events');
  }

  getUsers():FirebaseListObservable<any> {
    return this.af.database.list('/users');
  }

  getComments():FirebaseListObservable<any> {
    return this.af.database.list('/comments');
  }

  getUser(){
    this.af.auth.subscribe(x => {
      if (x) {
        this.userId = x.uid;
        this.fullName = x.facebook.displayName;
        this.email = x.facebook.email;
        this.photoURL = x.facebook.photoURL
      }
    })
  }

  toggleSigning(eventId, toggle){
    this.af.database.object('/events/' + eventId + '/responds/' + this.userId).set({
      attending: toggle,
      fullName: this.fullName,
      email: this.email,
      photoURL: this.photoURL
    })
  }

  signUp(eventId){
    this.toggleSigning(eventId, true)
  }

  signOff(eventId){
    this.toggleSigning(eventId, false)
  }
}

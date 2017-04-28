import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ApiService {

  constructor(private af: AngularFire) { }

  getEvents():FirebaseListObservable<any> {
    return this.af.database.list('/events');
  }

  getUsers():FirebaseListObservable<any> {
    return this.af.database.list('/users');
  }

  getComments():FirebaseListObservable<any> {
    return this.af.database.list('/comments');
  }
}

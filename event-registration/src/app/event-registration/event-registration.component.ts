import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styles: []
})
export class EventRegistrationComponent implements OnInit {
  authState;
  constructor(private af: AngularFire, public __as: ApiService) { }

  ngOnInit() {
    this.af.auth.subscribe(authState => {
      this.authState = authState;
      console.log(authState)
    })
  }

  logOut(){
    this.af.auth.logout().then(x => {
      this.__as.userId = null
    });
  }
}

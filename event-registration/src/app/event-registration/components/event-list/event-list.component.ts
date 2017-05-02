import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FirebaseListObservable } from 'angularfire2';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styles: [`
    .demo-card-wide.mdl-card {
      width: 100%;
      margin-bottom: 30px;
    }
    .demo-card-wide > .mdl-card__title {
      color: #fff;
      height: 176px;
      background: url('http://placehold.it/550x350') center / cover;
    }
    .demo-card-wide > .mdl-card__menu {
      color: #fff;
    }
    `]
})
export class EventListComponent implements OnInit {
  eventList: FirebaseListObservable<any>;

  constructor(private __as: ApiService, private af: AngularFire) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventList = this.__as.getEvents();
  }

  signUp(eventId) {
    this.__as.signUp(eventId);
  }

  signOff(eventId) {
    this.__as.signOff(eventId);
  }
}

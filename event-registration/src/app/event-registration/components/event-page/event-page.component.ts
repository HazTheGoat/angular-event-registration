import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
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

    .mdl-data-table{
      width: 100%;
    }

    .mdl-list__item-avatar{
      overflow: hidden;
      display: flex;
      justif-content: center;
    }

    .user-item{
      display: flex;
      justify-content: space-between;
      align-items: space-between;
      border-top: 1px solid rgba(0,0,0,.12);
      border-bottom: 1px solid rgba(0,0,0,.12);
      padding: 12px 18px;
    }

    .user-item:first-child{
      border-bottom: none;
    }

    .user-list{
      box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    }
    `]
})
export class EventPageComponent implements OnInit {
  eventObject: FirebaseObjectObservable<any>;
  pageId: number;
  eventId: string;
  respondsList;

  constructor(
    private af: AngularFire,
    public __as: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.pageId = this.route.snapshot.params['id'];
    this.eventObject = this.__as.getEvent(this.pageId);
    this.__as.getEvent(this.pageId).subscribe(res => {
      this.eventId = res.eventId
      this.respondsList = this.af.database.list('/events/' + this.eventId + '/responds');
    })
  }

  signUp(eventId) {
    this.__as.signUp(this.eventId);
  }

  signOff(eventId) {
    this.__as.signOff(this.eventId);
  }
}

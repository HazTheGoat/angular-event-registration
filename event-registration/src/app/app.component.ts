import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { ApiService } from './event-registration/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app works!';
  constructor(private __as: ApiService){
    this.__as.getUser();
  }
}

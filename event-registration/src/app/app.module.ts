import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventListComponent } from './event-registration/components/event-list/event-list.component';
import { ApiService } from './event-registration/services/api.service';
import { EventPageComponent } from './event-registration/components/event-page/event-page.component';
import { routesModule } from './routes';
import { LoginComponent } from './event-registration/components/login/login.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDIMeBO2eZz6jaMy1U1WbFLt7TcSMkTIE0",
  authDomain: "event-registration-3a519.firebaseapp.com",
  databaseURL: "https://event-registration-3a519.firebaseio.com",
  projectId: "event-registration-3a519",
  storageBucket: "event-registration-3a519.appspot.com",
  messagingSenderId: "838472119263"
};

@NgModule({
  declarations: [
    AppComponent,
    EventRegistrationComponent,
    EventListComponent,
    EventPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routesModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

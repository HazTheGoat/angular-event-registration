import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';

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
    EventRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

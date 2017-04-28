import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private af: AngularFire, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    }).then(authState => {
      this.router.navigateByUrl('/event-list')
    }).catch(err => {
      console.log(err)
    })
  }

  logout(){

  }
}

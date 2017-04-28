
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-registration/components/event-list/event-list.component';
import { EventPageComponent } from './event-registration/components/event-page/event-page.component';
import { LoginComponent } from './event-registration/components/login/login.component';

const appRoutes: Routes = [
  { path: 'event-list', component: EventListComponent },
  { path: 'event-page', component: EventPageComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: EventListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})

export class routesModule {

}

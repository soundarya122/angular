import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SpringRestComponent} from './spring-rest/spring-rest.component';

const routes: Routes = [
  {path: 'spring-rest', component: SpringRestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

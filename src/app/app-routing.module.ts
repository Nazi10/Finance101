import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user/user.component";
import {PhotoComponent} from "./photo/photo.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";

const routes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'main', component: PhotoComponent},
  {path: 'users/:id', component: UserProfileComponent}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

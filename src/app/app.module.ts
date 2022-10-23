import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CreditComponent } from './credit/credit.component';
import { InvestmentComponent } from './investment/investment.component';
import { SavingsComponent } from './savings/savings.component';
import { UserListComponent } from './user/user-list/user-list.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {ModalModule, BsModalService} from 'ngx-bootstrap/modal';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { PhotoComponent } from './photo/photo.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CreditComponent,
    InvestmentComponent,
    SavingsComponent,
    UserListComponent,
    HeaderComponent,
    PhotoComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BsDropdownModule,
    ModalModule,
    // RouterModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

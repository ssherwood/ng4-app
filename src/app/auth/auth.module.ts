import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}

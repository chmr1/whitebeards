import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SharedModule } from "./../shared/shared.module";
import { SignInComponent } from "./sign-in.component";
import { RegisterComponent } from "./register.component";

@NgModule({
  declarations: [RegisterComponent, SignInComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: "register", component: RegisterComponent },
      { path: "sign-in", component: SignInComponent },
    ]),
  ],
})
export class UsersModule {}

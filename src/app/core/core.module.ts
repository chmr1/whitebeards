import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { UserRepositoryService } from "./user-repository.service";
import { AccountMenuComponent } from "./account-menu.component";
import { NavBarComponent } from "./nav-bar.component";

@NgModule({
  declarations: [NavBarComponent, AccountMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent, AccountMenuComponent],
  providers: [UserRepositoryService],
})
export class CoreModule {}

import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "account-menu",
  templateUrl: "./account-menu.component.html",
  styleUrls: ["./account-menu.component.css"],
})
export class AccountMenuComponent {
  @Input() user;
  @Output() signedOut: EventEmitter<any> = new EventEmitter<any>();
  showMenu: boolean;

  signOut() {
    this.showMenu = false;
    this.signedOut.emit();
  }
}

import { LoadingSpinnerComponent } from "./loading-spinner.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  exports: [LoadingSpinnerComponent, CommonModule],
  declarations: [LoadingSpinnerComponent],
})
export class SharedModule {}

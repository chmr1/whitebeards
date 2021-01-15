import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "./../shared/shared.module";
import { CatalogComponent } from "./catalog.component";
import { CatalogRepositoryService } from "./catalog-repository.service";
import { FilterClassService } from "./filter-classes.service";
import { OrderByPipe } from "./order-by.pipe";

@NgModule({
  declarations: [CatalogComponent, OrderByPipe],
  imports: [RouterModule, SharedModule],
  providers: [CatalogRepositoryService, FilterClassService],
})
export class CatalogModule {}

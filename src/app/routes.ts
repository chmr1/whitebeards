import { Routes } from "@angular/router";
import { CatalogComponent } from "./catalog/catalog.component";

export const appRoutes: Routes = [
  { path: "catalog", component: CatalogComponent },
  { path: "users", loadChildren: "app/users/users.module#UsersModule" },
];

// { path: "users/register", component: RegisterComponent },
// { path: "users/sign-in", component: SignInComponent },

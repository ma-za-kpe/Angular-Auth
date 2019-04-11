import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserResolver } from "./user/user.resolver";
import { AuthGuard } from "./core/auth.guard";
import { AdminGuard } from "./core/admin.guard";

// COMPONENTS
import { LoginComponent } from "../app/login/login.component";
import { RegisterComponent } from "../app/register/register.component";
import { UserComponent } from "../app/user/user.component";
import { MovieAddComponent } from "../app/movie-add/movie-add.component";

const routes: Routes = [];

export const rootRouterConfig: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, canActivate: [AuthGuard] },
  { path: "register", component: RegisterComponent, canActivate: [AuthGuard] },
  { path: "user", component: UserComponent, resolve: { data: UserResolver } },
  {
    path: "addMovie",
    component: MovieAddComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

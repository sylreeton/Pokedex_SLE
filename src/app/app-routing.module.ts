import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { page404Component } from "./Page404.component";
const appRoutes: Routes = [
  { path: '',redirectTo: 'pokemon/all', pathMatch: 'full'},
  { path: '**' ,component: page404Component}

]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}

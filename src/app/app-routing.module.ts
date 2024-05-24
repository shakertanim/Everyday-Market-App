import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryMenuComponent } from './market/category-menu/category-menu.component';
import {CategoryMenuItemComponent} from "./market/category-menu-item/category-menu-item.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./core/home/home.component";
const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},{
  path: 'category-menu-items',
  component: CategoryMenuItemComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

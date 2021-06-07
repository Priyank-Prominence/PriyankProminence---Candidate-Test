import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import {SpecificCountryComponent} from '../views/specific-country/specific-country.component';
import {SpecificRegionComponent} from '../views/specific-region/specific-region.component';
import {SpecificSubregionComponent} from '../views/specific-subregion/specific-subregion.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'country/:name',component:SpecificCountryComponent},
  {path:'region/:name',component:SpecificRegionComponent},
  {path:'subregion/:name',component:SpecificSubregionComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLayoutRoutingModule } from './user-layout-routing.module';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {FormsModule} from '@angular/forms';
import {FilterTablePipe} from '../shared/pipe/filter.pipe';

import { UserLayoutComponent } from './user-layout/user-layout.component';
import {HomeComponent} from '../views/home/home.component';
import {SpecificCountryComponent} from '../views/specific-country/specific-country.component';
import {SpecificRegionComponent} from '../views/specific-region/specific-region.component';
import {SpecificSubregionComponent} from '../views/specific-subregion/specific-subregion.component';
import { OrderModule } from 'ngx-order-pipe'; // <- import OrderModule




@NgModule({
  declarations: [
    UserLayoutComponent,
    FilterTablePipe,
    HomeComponent,
    SpecificCountryComponent,
    SpecificRegionComponent,
    SpecificSubregionComponent
  ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule,
    NgxPaginationModule,
    FormsModule,
    OrderModule
    ]
})
export class UserLayoutModule { }

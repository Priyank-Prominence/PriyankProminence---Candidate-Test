import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.services';
import {  ToastrService } from 'ngx-toastr';
import { RouterService } from 'src/app/shared/services/router.service';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search:any='';
  paginator: number = 1;
  countriesList:any[]=[];
  sortedCountries:any[]=[];
  order: string = 'name';
  reverse: boolean = false;

  constructor(
    private orderPipe: OrderPipe,
    private apiService:ApiService,
    private toastr:ToastrService,
    private routerService:RouterService
    ) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries(){
    this.apiService.getAllCountries().subscribe(result =>{
      if(result.success){
        this.countriesList = [];
        this.countriesList = result.data;
        this.sortedCountries = this.orderPipe.transform(this.countriesList, 'name');
      }
      else{
        this.toastr.error(result.message || 'Error in fetching countries');
      }
    },err =>{
      console.log(err);
      this.toastr.error('Connection Problem');
    });
  }

  goTocountry(name:string){
    this.routerService.specificCountry(name);
  }

  goToRegion(name:string){
    this.routerService.specificRegion(name);
  }

  goToSubRegion(name:string){
    this.routerService.specificSubRegion(name);
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.services';
import { RouterService } from 'src/app/shared/services/router.service';
@Component({
  selector: 'app-specific-country',
  templateUrl: './specific-country.component.html',
  styleUrls: ['./specific-country.component.css']
})
export class SpecificCountryComponent implements OnInit {

  countryName:string = '';
  countryInfo:any={};
  constructor(
    private activatedRoute:ActivatedRoute,
    private apiService:ApiService,
    private toastr:ToastrService,
    private routerService:RouterService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.countryName = params['name'];
      this.getCountryInfo();
    })
  }

  getCountryInfo(){
    this.apiService.getSpecificCountry(this.countryName).subscribe(res =>{
      this.countryInfo = {};
        res.data != null ? this.countryInfo = res.data[0] : this.toastr.info('No information exists of '+this.countryName);
    },err =>{
      console.log(err);
      this.toastr.error('Connection Problem');
    })
  }

  goToCountry(name:string){
  
    this.routerService.specificCountry(name);
  }

}

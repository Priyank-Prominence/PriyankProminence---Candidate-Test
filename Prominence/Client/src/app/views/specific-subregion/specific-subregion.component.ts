import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.services';
import { RouterService } from 'src/app/shared/services/router.service';

@Component({
  selector: 'app-specific-subregion',
  templateUrl: './specific-subregion.component.html',
  styleUrls: ['./specific-subregion.component.css']
})
export class SpecificSubregionComponent implements OnInit {

  subRegionName:string = '';
  totalPopulation:number = 0;

  countryPaginator:number = 1;
  subRegionInfo:any[]=[];
  regionName:string = '';
  search:string='';
  sortedCountries:any[]=[];
  order: string = 'name';
  reverse: boolean = false;

  constructor(
    private activatedRoute:ActivatedRoute,
    private apiService:ApiService,
    private toastr:ToastrService,
    private routerService:RouterService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.subRegionName = params['name'];
      this.getSubRegionInfo();
    })
  }

  getSubRegionInfo(){
    this.apiService.getSpecificSubRegion(this.subRegionName).subscribe(res =>{
      this.subRegionInfo = [];
      if(res.data == null) this.toastr.info('No information exists of '+this.subRegionName)
      else {
        this.subRegionInfo = res.data;
        this.regionName = this.subRegionInfo[0].region;
        this.sortedCountries = this.subRegionInfo;
        this.calculatePopulation();
      }
    },err =>{
      console.log(err);
      this.toastr.error('Connection Problem');
    })
  }

  goToCountry(name:string){
    this.routerService.specificCountry(name);
  }
  goToSpecificRegion(name:string){
    this.routerService.specificRegion(name);
  }

  calculatePopulation(){
    this.subRegionInfo.forEach(country =>{
      this.totalPopulation += country.population;
    })
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

}

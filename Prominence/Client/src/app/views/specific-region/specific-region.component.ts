import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.services';
import { RouterService } from 'src/app/shared/services/router.service';

@Component({
  selector: 'app-specific-region',
  templateUrl: './specific-region.component.html',
  styleUrls: ['./specific-region.component.css']
})
export class SpecificRegionComponent implements OnInit {

  regionName:string = '';
  totalPopulation:number = 0;

  countryPaginator:number = 1;
  subRegionPaginator:number = 1;


  
  subRegionsOfRegion:any[]=[];
  sortedSubRegionOfRegion:any[]=[];
  orderSubRegion:string='name';
  reverseSubRegion:boolean=false;
  searchRegion:string = '';

  regionInfo:any[]=[];
  sortedRegionInfo:any[]=[];
  orderRegion: string = 'name';
  reverseRegion: boolean = false;
  searchSubRegion:string='';

  constructor(
    private activatedRoute:ActivatedRoute,
    private apiService:ApiService,
    private toastr:ToastrService,
    private routerService:RouterService,
    private orderPipe:OrderPipe
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.regionName = params['name'];
      this.getRegionInfo();
    })
  }

  getRegionInfo(){
    this.apiService.getSpecificRegion(this.regionName).subscribe(res =>{
      this.regionInfo =[];
      console.log(res.data);
      if(res.data == null) this.toastr.info('No information exists of '+this.regionName);
      else {
        this.regionInfo = res.data;
        this.calculatePopulation();
        this.getSubRegionsInRegion();
        this.sortedRegionInfo = this.orderPipe.transform(this.regionInfo, 'name');
      }
      
    },err =>{
      console.log(err);
      this.toastr.error('Connection Problem');
    })
  }

  calculatePopulation(){
    this.regionInfo.forEach(country =>{
      this.totalPopulation += country.population;
    })
  }

  getSubRegionsInRegion(){
    this.regionInfo.forEach(country =>{
      let isSubRegionExists = false;
      this.subRegionsOfRegion.forEach(name =>{
        if(name == country.subregion) isSubRegionExists = true;
      })
      if(!isSubRegionExists) this.subRegionsOfRegion.push(country.subregion);
    })
    this.sortedSubRegionOfRegion = [];
    this.sortedSubRegionOfRegion = this.subRegionsOfRegion;
    console.log(this.subRegionsOfRegion);
  }

  goToSpecificSubRegion(name:string){
    this.routerService.specificSubRegion(name);
  }

  goToCountry(name:string){
    this.routerService.specificCountry(name);
  }

  setRegionOrder(value: string) {
    if (this.orderRegion === value) {
      this.reverseRegion = !this.reverseRegion;
    }
    this.orderRegion = value;
  }
  setSubRegionOrder(value: string) {
    if (this.orderSubRegion === value) {
      this.reverseSubRegion = !this.reverseSubRegion;
    }
    this.orderSubRegion = value;
  }

}

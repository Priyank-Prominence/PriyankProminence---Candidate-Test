import { Injectable } from '@angular/core';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})

export class RouterService{

  constructor(private router: Router) { }


  specificCountry(name:string){
      this.router.navigate(['/country',name]);
  }

  specificRegion(name:string){
    this.router.navigate(['/region',name]);
  }
  
  specificSubRegion(name:string){
    this.router.navigate(['/subregion',name]);
  }
  
  
  


}


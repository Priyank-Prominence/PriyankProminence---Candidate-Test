import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class ApiService{


  

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
  

  constructor(private http: HttpClient) { }


  
  getAllCountries():Observable<any>{
    return this.http.get(`${environment.baseUrl}getAllCountries`);
  }

  getSpecificCountry(countryName:string):Observable<any>{
    return this.http.get(`${environment.baseUrl}getSpecificCountry?countryName=${countryName}`);
  }

  getSpecificRegion(regionName:string):Observable<any>{
    return this.http.get(`${environment.baseUrl}getSpecificRegion?regionName=${regionName}`);
  }

  getSpecificSubRegion(subRegionName:string):Observable<any>{
    return this.http.get(`${environment.baseUrl}getSpecificSubRegion?subRegionName=${subRegionName}`);
  }
  
  


}


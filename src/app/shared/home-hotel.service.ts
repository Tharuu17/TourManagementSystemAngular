import { Injectable } from '@angular/core';
import { HomeHotel } from './home-hotel.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeHotelService {

  formData : HomeHotel;
  list : HomeHotel[];
  guide1 : HomeHotel;

  readonly rootURL = "https://localhost:44392/api"

  constructor(public http : HttpClient) { }

  postHomeHotel(formData : HomeHotel[]){
    return this.http.post(this.rootURL+'/HomeHotel',formData)
   }
 
   refreshList(){
     this.http.get(this.rootURL+'/HomeHotel')
     .toPromise().then(res => this.list = res as HomeHotel[])
   }
 
   putHomeHotel(formData : HomeHotel){
     return this.http.put(this.rootURL+'/HomeHotel/'+formData.HomeHotelID,formData)
    }
 
    deleteHomeHotel(id : number){
      return this.http.delete(this.rootURL+'/HomeHotel/'+id);
    }
    GetSingleHomeHotel(id : number): Observable<any>{
      return this.http.get(this.rootURL+'/HomeHotel/' + id)
        
    }
}



 

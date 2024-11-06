import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { __classPrivateFieldGet } from 'tslib';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  public countryDataUpdated: Subject<any> = new Subject<any>();
  countryData: any;
  
  constructor(private http: HttpClient) { }

updateData(code:string){  
  let url: string = "https://api.worldbank.org/v2/country/" + code + "?format=json";
    this.http.get(url)
      .subscribe(
        {
          next: (response: any) => {
          this.countryData = response
          console.log(this.countryData)
          this.countryDataUpdated.next(this.countryData)
          }
        }
      )
    }
}

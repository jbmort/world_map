import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
title : string = "World Map";
constructor(private dataService: DataService) {}

search(event: Event){
  event.preventDefault()
  this.dataService.countryDataUpdated.subscribe(data => {
    if(data[0].message[0].id == '120'){ 
      alert("Country code is invalid please enter another two digit code")
    }
    // else if(!data[0].message){
    //   let code: string = data[1][0].iso2Code
    //   // send emitter to map to highlight country 
    // }
  }
)
    let query = event.target as HTMLElement
    let countryCode = query.querySelector("input")?.value as string
    this.dataService.updateData(countryCode)

}

}

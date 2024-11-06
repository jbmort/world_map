import { Component} from '@angular/core';
import { DataService } from '../shared/data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  country: any = [
    {
      "id": "",
      "iso2Code": "",
      "name": "",
      "region": {
        "id": "",
        "iso2code": "",
        "value": ""
      },
      "adminregion": {
        "id": "",
        "iso2code": "",
        "value": ""
      },
      "incomeLevel": {
        "id": "",
        "iso2code": "",
        "value": ""
      },
      "lendingType": {
        "id": "",
        "iso2code": "",
        "value": ""
      },
      "capitalCity": "",
      "longitude": "",
      "latitude": ""
    }
  ]


  constructor(private dataService: DataService) {}
    ngOnInit() {
      this.dataService.countryDataUpdated.subscribe(data => {
        this.country = data[1]
      });
    }

  }
  


// need api service that updates card 
// card should also have default values before something is clicked or if nothing is found
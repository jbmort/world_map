import { Component} from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [NgFor],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  constructor(private dataService: DataService) {}

  hover(event: Event){
    let country = event.target as HTMLElement
    if(country.id){
      country.setAttribute("fill", "limegreen")
      this.dataService.updateData(country.id)
    }
  }

  out(event: Event){
    let country = event.target as HTMLElement
    country.setAttribute("fill", "rgb(29, 125, 29)")
  }
}
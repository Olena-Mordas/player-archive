import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { PalyerData } from '../model/player-data';

@Component({
  selector: 'search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {

  playerData: PalyerData;

  constructor(private playerDataService: DataService) { }

  ngOnInit(): void {
  }

  clickSearch(searchInput: string){
    this.playerDataService.getPlayeData(searchInput)
      .subscribe(
        (data:PalyerData)=>{
          this.playerData = data;
          console.log(this.playerData)
        },
        err => console.log(err), //TODO
      )
  }
}

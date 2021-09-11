import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { PalyerData } from '../model/player-data';
import { PlayerProfile } from '../model/player-profile';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {

  playerData: PalyerData;
  playerProfile: PlayerProfile;
  showAnavailableMessage=false;

  constructor(
    private playerDataService: DataService,
    private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  clickSearch(searchInput: string){
    this.playerDataService.getPlayerData(searchInput)
      .subscribe(
        (data:PalyerData)=>{
          this.playerData = data;
          if(this.playerData.active==='true'){
            this.profileService.getPlayerProfile(this.playerData['profile-id'])
              .subscribe(
                (profile:PlayerProfile)=>{
                  this.playerProfile = {...profile};
                  console.log('x');
                },
                err => console.log(err), //TODO
              )
          }
          else this.showAnavailableMessage = true;
        },
        err => console.log(err), //TODO
      )
  }
}

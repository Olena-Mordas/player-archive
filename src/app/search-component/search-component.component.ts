import { Component } from '@angular/core';
import { PalyerData } from '../model/player-data';
import { PlayerProfile } from '../model/player-profile';
import { DataService } from '../service/data.service';
import { ProfileService } from '../service/profile.service';


@Component({
  selector: 'search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent {

  playerData: PalyerData;
  playerProfile: PlayerProfile;
  showAnavailableMessage=false;

  constructor(
    private playerDataService: DataService,
    private profileService: ProfileService) { }

 
  clickSearch(searchInput: string){
    this.showAnavailableMessage = false;
    this.playerDataService.getPlayerData(searchInput)
      .subscribe((data:PalyerData)=>{
          this.playerData = data;
          if(this.playerData.active==='true'){
            this.profileService.getPlayerProfile(this.playerData['profile-id'])
              .subscribe(
                (profile:PlayerProfile)=>{
                  this.playerProfile = {...profile};
                },
                err => console.log(err), //TODO
              )
          }
          else this.showAnavailableMessage = true;
        },
        err=>this.handleError(err)
      )
  }


  handleError(err: String): void {
    // check error code and display the message
    if(err.split(" ")[2]==="403"){
      this.showAnavailableMessage = true;
    }
    console.log(err);
  }

}

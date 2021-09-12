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

  showUnavailableMessage=false;
  playerData: PalyerData;
  playerProfile: PlayerProfile;
  

  constructor(
    private playerDataService: DataService,
    private profileService: ProfileService) { }

 
  clickSearch(searchInput: string): void{
    // call the DataService to get data for provided payer's name
    this.playerDataService.getPlayerData(searchInput)
      .subscribe((data:PalyerData)=>{
        // store the data
          this.playerData = data;
          if(this.playerData.active==='true'){
            // if player is active call ProfileService to get profile data
            this.profileService.getPlayerProfile(this.playerData['profile-id'])
              .subscribe(
                (profile:PlayerProfile)=>{
                  // store the data and hide the message
                  this.showUnavailableMessage = false;
                  this.playerProfile = {...profile};
                },
                err => this.handleError(err)
              )
          }
          else this.showUnavailableMessage = true;
        },
        err=>this.handleError(err)
      )
  }


  handleError(err: String): void {
    // check error code and display the message
    if(err.split(" ")[2]==="403"){
      this.showUnavailableMessage = true;
    }
    console.log(err);
  }

}

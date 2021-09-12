import { Component, Input } from '@angular/core';
import { PlayerProfile } from '../model/player-profile';

@Component({
  selector: 'player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss']
})
export class PlayerProfileComponent {

  //input property to provide the player's details
  @Input()
  player:PlayerProfile; 

}

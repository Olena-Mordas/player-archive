import { Component, Input, OnInit } from '@angular/core';
import { PlayerProfile } from '../model/player-profile';

@Component({
  selector: 'player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss']
})
export class PlayerProfileComponent {

  @Input()
  player:PlayerProfile;

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PalyerData } from '../model/player-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  playerDataURL = 'https://web-sandbox.onefootball.com/assignments/player/data';

  constructor(private httpClient: HttpClient) { }

  getPlayerData(playerName:string):Observable<PalyerData>{
    return this.httpClient.get<PalyerData>(this.playerDataURL+'/'+playerName+'.json');
  }
}

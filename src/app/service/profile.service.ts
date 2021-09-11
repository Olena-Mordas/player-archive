import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerProfile } from '../model/player-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profileUrl = 'https://web-sandbox.onefootball.com/assignments/player/profile';

  constructor(private httpClient: HttpClient) { }

  getPlayerProfile(profileId:string):Observable<PlayerProfile>{
    return this.httpClient.get<PlayerProfile>(this.profileUrl+'/'+profileId);
  }
}

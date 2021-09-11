import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PlayerProfile } from '../model/player-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profileUrl = 'https://web-sandbox.onefootball.com/assignments/player/profile';

  constructor(private httpClient: HttpClient) { }

  getPlayerProfile(profileId:string):Observable<PlayerProfile>{
    return this.httpClient.get<PlayerProfile>(this.profileUrl+'/'+profileId)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );;
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status} Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PalyerData } from '../model/player-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  playerDataURL = 'https://web-sandbox.onefootball.com/assignments/player/data';

  constructor(private httpClient: HttpClient) { }

  getPlayerData(playerName: string): Observable<PalyerData> {
    return this.httpClient.get<PalyerData>(this.playerDataURL + '/' + playerName + '.json')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
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

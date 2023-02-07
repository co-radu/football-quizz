import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/shared/models/player/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getPlayerList(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(`${this.apiUrl}/players`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl: string = "http://localhost:8080";

  constructor(
    private httpClient: HttpClient
  ) { }

  getGameList(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(`${this.apiUrl}/games`)
  }
}
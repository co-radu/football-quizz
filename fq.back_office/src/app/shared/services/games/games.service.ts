import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/shared/models/game/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private apiUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(`${this.apiUrl}/games`)
  }

  createGame(newGame: Game): Observable<Game> {
    return this.httpClient.post<Game>(`${this.apiUrl}/games`, newGame);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameType } from 'src/app/models/game-type/game-type';

@Injectable({
  providedIn: 'root'
})
export class GameTypeService {

  private apiUrl: string = "http://localhost:8080";

  constructor(
    private httpClient: HttpClient
  ) { }

  getGameTypeList(): Observable<GameType[]> {
    return this.httpClient.get<GameType[]>(`${this.apiUrl}/game_types`)
  }
}

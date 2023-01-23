import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  private apiUrl: string = "http://localhost:8080";
  
  constructor(
    private httpClient: HttpClient
    ) { }
    
    getGameList(): Observable<any> {
      return this.httpClient.get<any>(`${this.apiUrl}/games`)
    }
  }
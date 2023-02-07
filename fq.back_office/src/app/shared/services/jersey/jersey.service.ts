import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jersey } from 'src/app/shared/models/jersey/jersey';

@Injectable({
  providedIn: 'root'
})
export class JerseyService {

  private apiUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getJerseyList(): Observable<Jersey[]> {
    return this.httpClient.get<Jersey[]>(`${this.apiUrl}/jerseys`)
  }
}

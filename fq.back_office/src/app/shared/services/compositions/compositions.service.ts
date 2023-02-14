import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Composition } from 'src/app/shared/models/composition/composition';

@Injectable({
  providedIn: 'root'
})
export class CompositionsService {

  private apiUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getCompositionsList(): Observable<Composition[]> {
    return this.httpClient.get<Composition[]>(`${this.apiUrl}/compositions`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private https: HttpClient) { }

  
  getAllEpisodes(): Observable<any> {
    return this.https.get(`${this.apiUrl}`);
  }
}

import { Injectable } from '@angular/core';
import { PreguntaTresComponent } from './pregunta-tres.component';
import { preguntatres } from './preguntatres';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreguntaTresService {

  constructor(private http: HttpClient) { }

  getEpisodes(): Observable<preguntatres[]> {
    return this.http.get<preguntatres[]>("https://rickandmortyapi.com/api/episode");
  }
}

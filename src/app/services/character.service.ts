import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { CharacterResponse } from '../model/character-response';
import { Character } from '../model/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  character: WritableSignal<Character> = signal({
    id: 1,
    name: "string",
    status: "string",
    species: "string",
    type: "string",
    gender: "string",
    origin: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/1' },
    location: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/1' },
    image: "string",
    episode: [""],
    url: "string",
    created: new Date(),
  });

  getAll(): Observable<CharacterResponse> {
    const apiUrl = this.baseUrl + "/character";

    return this.http.get<CharacterResponse>(apiUrl).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        const errorResponse: CharacterResponse = {
          statusResponse: {
            success: false,
            errorMessage: httpErrorResponse.error.errorMessage || 'Unknown error',
          },
          results: []
        }
        return of(errorResponse);
      })
    );
  }

  /* 5. Manejo de Estado con Signals */
  getById(id: number) {
    const apiUrl = this.baseUrl + "/character/" + id;
    let response = this.http.get<Character>(apiUrl);
    response.subscribe(data => {
      this.character.set(data);
    })
  }

  getByUrl(url: string): Observable<Character> {
    const apiUrl = url;
    let response = this.http.get<Character>(apiUrl);
    console.log("response", response);
    return response;
  }

}

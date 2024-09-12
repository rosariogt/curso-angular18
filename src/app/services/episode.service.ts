import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { EpisodeResponse } from '../model/episode-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  constructor() { }

  getAll(): Observable<EpisodeResponse> {
    const apiUrl = this.baseUrl + "/episode";
    return this.http.get<EpisodeResponse> (apiUrl);
  }
}

import { TestBed } from '@angular/core/testing';

import { EpisodeService } from './episode.service';
import { EpisodeResponse } from '../model/episode-response';
import { provideHttpClient } from '@angular/common/http';

fdescribe('EpisodeService', () => {
  let service: EpisodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
      ]
    });
    service = TestBed.inject(EpisodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get characters', () => {
    let response: EpisodeResponse;
    service.getAll().subscribe((data) => {
      response = data;
      expect(response!.results.length > 0).toBeTruthy;
    });
  });
});

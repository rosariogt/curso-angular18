import { TestBed } from '@angular/core/testing';

import { CharacterService } from './character.service';
import { CharacterResponse } from '../model/character-response';
import { provideHttpClient } from '@angular/common/http';
import { Character } from '../model/character.model';


/** 9. Pruebas Unitarias */
fdescribe('CharacterService', () => {
  let service: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
      ]
    });
    service = TestBed.inject(CharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get characters', () => {
    let response: CharacterResponse;
    service.getAll().subscribe((data) => {
      response = data;
      expect(response!.results.length > 0).toBeTruthy;
    });
  });

  it('should get single character', () => {
    let response: Character;
    service.getById(2);
    expect(response!).not.toBeNaN;
  });

});

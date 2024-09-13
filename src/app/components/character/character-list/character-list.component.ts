import { ChangeDetectionStrategy, Component, inject, OnInit, Signal, signal } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { CharacterService } from '../../../services/character.service';
import { Character } from '../../../model/character.model';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NavComponent } from "../../../paqges/nav/nav.component";

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [MatListModule,
    AsyncPipe,
    RouterLink, NavComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterListComponent implements OnInit {

  characterService = inject(CharacterService);
  router = inject(Router);

  characters$ = new Observable<Character[]>();
  characters:  Character[] = [];

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    /* 4. Uso de pipe async */
    this.characters$ = this.characterService.getAll().pipe(
      map((data) => data.results)
    );
  }

  showCharacter(id: number) {
    this.characterService.getById(id);
    this.router.navigate(['/character']);
  }

}

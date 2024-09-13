import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NavComponent } from "../../pages/nav/nav.component";
import { MatListModule } from '@angular/material/list';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EpisodeService } from '../../services/episode.service';
import { Episode } from '../../model/episode.model';
import { map, Observable } from 'rxjs';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../model/character.model';
import { CharacterComponent } from "../character/character/character.component";

@Component({
  selector: 'app-episode-list',
  standalone: true,
  imports: [MatListModule,
    AsyncPipe,
    RouterLink, NavComponent, CharacterComponent],
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpisodeListComponent implements OnInit {

  episodeService = inject(EpisodeService);
  characterService = inject(CharacterService);

  episodes$ = new Observable<Episode[]>();
  character$ = new Observable<Character>();

  episodes:  Episode[] = [];


  ngOnInit(): void {
    this.loadEpisodes();
  }

  loadEpisodes() {
    /* 4. Uso de pipe async */
    this.episodes$ = this.episodeService.getAll().pipe(
      map((data) => data.results)
    );
  }

  showCharacter(url: string) {
    console.log("kddkdk", url);
    return this.characterService.getByUrl(url).pipe(map((data) => data.image));
  }

}

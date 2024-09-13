import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { NavComponent } from "../../../pages/nav/nav.component";
import { CharacterService } from '../../../services/character.service';
import { Character } from '../../../model/character.model';
import { LoadingComponent } from "../../loading/loading.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [MatCardModule, NavComponent, LoadingComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent implements OnInit {

  characterService = inject(CharacterService);
  router = inject(Router);

  ngOnInit(): void {

  }

  return() {
    this.router.navigate(['/characters']);
  }

}



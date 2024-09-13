import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character/character-list/character-list.component';
import { CharacterComponent } from './components/character/character/character.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CharacterListPageComponent } from './pages/character-list-page/character-list-page.component';
import { EpisodeListPageComponent } from './pages/episode-list-page/episode-list-page.component';

export const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'characters',
    pathMatch: 'full',
    loadComponent: () => import('./pages/character-list-page/character-list-page.component').then((m) => m.CharacterListPageComponent)
  },
  {
    path: 'character',
    component: CharacterComponent
  },
  {
    path: 'episodes',
    component: EpisodeListPageComponent
  }
];

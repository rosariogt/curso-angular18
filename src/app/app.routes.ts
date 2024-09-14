import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characters'
  },
  {
    path: 'characters',
    pathMatch: 'full',
    loadComponent: () => import('./pages/character-list-page/character-list-page.component').then((m) => m.CharacterListPageComponent),
    data: { preload: true }
  },
  {
    path: 'character',
    pathMatch: 'full',
    loadComponent: () => import('./components/character/character/character.component').then((m) => m.CharacterComponent),
    data: { preload: true }
  },
  {
    path: 'episodes',
    pathMatch: 'full',
    loadComponent: () => import('./pages/episode-list-page/episode-list-page.component').then((m) => m.EpisodeListPageComponent),
    data: { preload: true }
  }
];

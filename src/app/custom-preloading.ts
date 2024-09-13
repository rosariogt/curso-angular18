import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(
    route: Route,
    preload: () => Observable<unknown>
  ): Observable<unknown> {
    return route.data && route.data['preload'] ? preload() : of(null);
  }
}

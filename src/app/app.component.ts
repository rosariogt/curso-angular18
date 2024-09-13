import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterListComponent } from './components/character/character-list/character-list.component';
import { LandingComponent } from "./pages/landing/landing.component";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
  LayoutModule,
  MediaMatcher,
} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterListComponent, LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'project';

  isTablet: boolean = false;
  breakpointObserver = inject(BreakpointObserver);

  constructor() {
    this.breakpointObserver.observe([Breakpoints.Tablet]).subscribe(result => {
      this.isTablet = result.matches;
      console.log("Es una tablet...");
    });
  }

}

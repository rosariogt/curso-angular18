import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/character/character-list/character-list.component";
import { LoadingComponent } from "../../components/loading/loading.component";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
  LayoutModule,
  MediaMatcher,
} from '@angular/cdk/layout';

@Component({
  selector: 'app-character-list-page',
  standalone: true,
  imports: [CharacterListComponent, LoadingComponent],
  templateUrl: './character-list-page.component.html',
  styleUrl: './character-list-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterListPageComponent {

  breakpointObserver = inject(BreakpointObserver);

  constructor() {

  }

}

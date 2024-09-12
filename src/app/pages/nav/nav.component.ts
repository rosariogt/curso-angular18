import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {

  router = inject(Router);

  showCharacters() {
    this.router.navigate(['/characters']);
  }

  showEpisodes() {
    this.router.navigate(['/episodes']);
  }
}



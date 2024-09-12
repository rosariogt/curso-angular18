import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EpisodeListComponent } from "../../components/episode-list/episode-list.component";
import { LoadingComponent } from "../../components/loading/loading.component";

@Component({
  selector: 'app-episode-list-page',
  standalone: true,
  imports: [EpisodeListComponent, LoadingComponent],
  templateUrl: './episode-list-page.component.html',
  styleUrl: './episode-list-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpisodeListPageComponent {

}

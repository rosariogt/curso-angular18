import { Component } from '@angular/core';
import { CharacterListComponent } from "../../components/character/character-list/character-list.component";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CharacterListComponent, NavComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}

import { Component, Input } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-movielist',
  standalone: true,
  imports: [MoviesComponent],
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.scss',
})
export class MovielistComponent {
  @Input() movielist: any;
}

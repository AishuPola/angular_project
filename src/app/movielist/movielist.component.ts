import { Component, Input } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movielist',
  standalone: true,
  imports: [MoviesComponent, FormsModule],
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.scss',
})
export class MovielistComponent {
  @Input() movielist: any;
  name = '';
  poster = '';
  rating = '';
  summary = '';
}

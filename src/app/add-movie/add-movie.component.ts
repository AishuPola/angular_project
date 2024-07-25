import { Component, Input } from '@angular/core';
import { MovielistComponent } from '../movielist/movielist.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [MovielistComponent, FormsModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss',
})
export class AddMovieComponent {
  @Input() movieadd: any;
  poster = '';
  name = '';
  rating = '';
  summary = '';

  addMovie() {
    this.movieadd.push({
      poster: this.poster,
      name: this.name,
      rating: this.rating,
      summary: this.summary,
    });
  }
}

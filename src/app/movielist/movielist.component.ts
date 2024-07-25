import { Component, Input } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';
import { FormsModule } from '@angular/forms';
import { Imovie } from '../app.component';

@Component({
  selector: 'app-movielist',
  standalone: true,
  imports: [MoviesComponent, FormsModule],
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.scss',
})
export class MovielistComponent {
  // @Input() movielist: any;
  @Input() movielist: Array<Imovie> = [];
  name = '';
  poster = '';
  rating = '';
  summary = '';
  addMovie() {
    let newMovie: Imovie = {
      name: this.name,
      poster: this.poster,
      rating: +this.rating,
      summary: this.summary,
    };
    this.movielist.push(newMovie);
  }
}

import { Component, Input } from '@angular/core';
import { MovielistComponent } from '../movielist/movielist.component';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';
import { Imovie } from '../app.component';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [MovielistComponent, FormsModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss',
})
export class AddMovieComponent {
  // @Input() movieadd: any;
  movielist: Array<Imovie> = [];
  constructor(public moviesservie: MoviesService, private router: Router) {
    this.movielist = this.moviesservie.getMovielist();
  }
  poster = '';
  name = '';
  rating = 0;
  summary = '';
  trailer = '';

  addMovie() {
    // this.movieadd.push({
    //   poster: this.poster,
    //   name: this.name,
    //   rating: this.rating,
    //   summary: this.summary,
    // });
    let newMovie: Omit<Imovie, 'id'> = {
      poster: this.poster,
      name: this.name,
      rating: this.rating,
      summary: this.summary,
      trailer: this.trailer,
    };
    this.moviesservie.addMovie(newMovie).then(() => {
      // Move to movies page
      this.router.navigate(['movies']);
    });
  }
}

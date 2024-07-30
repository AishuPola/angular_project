import { Component, Input } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';
import { FormsModule } from '@angular/forms';
import { Imovie } from '../app.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-movielist',
  standalone: true,
  imports: [
    MoviesComponent,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    AddMovieComponent,
  ],
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.scss',
})
export class MovielistComponent {
  // @Input() movielist: any;
  movielist: Array<Imovie> = [];
  isLoading: boolean = true;
  // constructor(public moviesservice: MoviesService) {
  //   this.movielist = this.moviesservice.movielist;
  // }

  name = '';
  poster = '';
  rating = '';
  summary = '';
  id = '';
  trailer = '';
  addMovie() {
    let newMovie: Imovie = {
      name: this.name,
      poster: this.poster,
      rating: +this.rating,
      summary: this.summary,
      id: this.id,
      trailer: this.trailer,
    };
    this.movielist.push(newMovie);
  }
  deleteMovieP(Index: number) {
    // let idx=this.movielist.indexOf();
    this.movielist.splice(Index, 1);
  }
  constructor(public moviesservice: MoviesService) {}
  // this.movielist = this.moviesservice.movielist;
  ngOnInit() {
    this.moviesservice.getAllMoviesP().then((data) => {
      this.movielist = data;
      this.isLoading = false;
    });
  }
}

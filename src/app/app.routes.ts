import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovielistComponent } from './movielist/movielist.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
export const routes: Routes = [
  {
    path: 'movies',
    component: MovielistComponent,
  },
  {
    path: 'color-game',
    component: ColorGameComponent,
  },
  {
    path: 'movies/add',
    component: AddMovieComponent,
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },

  //     {
  // path:"movie",
  // component:
  //     },
];

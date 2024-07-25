import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovielistComponent } from './movielist/movielist.component';
export const routes: Routes = [
  {
    path: '',
    component: MovielistComponent,
  },
  {
    path: 'color-game',
    component: ColorGameComponent,
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

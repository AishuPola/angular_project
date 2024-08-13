import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovielistComponent } from './movielist/movielist.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { Component } from '@angular/core';
import { authGuard } from './auth.guard';
import { EditMoviesComponent } from './edit-movies/edit-movies.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
  {
    path: 'movies',

    children: [
      { path: '', component: MovielistComponent },
      {
        path: 'add',
        component: AddMovieComponent,
        canActivate: [authGuard],
      },
      { path: ':id', component: MovieDetailsComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'color-game',
    component: ColorGameComponent,
    canActivate: [authGuard],
  },
  {
    path: 'movies/edit/:id',
    component: EditMoviesComponent,
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

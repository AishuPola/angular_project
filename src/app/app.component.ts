import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MoviesComponent } from './movies/movies.component';
import { MovielistComponent } from './movielist/movielist.component';
import { CounterComponent } from './counter/counter.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

export interface Imovie {
  name: string;
  poster: string;
  rating: number;
  summary: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    MoviesComponent,
    MovielistComponent,
    CounterComponent,
    ColorGameComponent,
    ColorBoxComponent,
    AddMovieComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  // template: `@for user of users; track user.id{ {{ user.imageurl }},
  //   {{ user.name }}, }`,
  template: `@for movie of movies; track movie.id {{ poster }},{{ name }},{{
      rating
    }},{{ summary }}`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // imageurl="https://img.freepik.com/premium-photo/cute-little-girls-picture-ai-generated_1003721-472.jpg";
  // title='aishwarya';

  users = [
    {
      id: 1,
      name: 'rishika',
      imageurl:
        'https://e0.pxfuel.com/wallpapers/618/134/desktop-wallpaper-whatsapp-d-p-cute-baby.jpg',
    },
    {
      id: 2,
      name: 'manu',
      imageurl:
        'https://i.ytimg.com/vi/PVGktapZ45g/oardefault.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLBSshp309-HJ-pmizO7ZCULseoP0w',
    },
    {
      id: 3,
      name: 'teja',
      imageurl:
        'https://e0.pxfuel.com/wallpapers/618/134/desktop-wallpaper-whatsapp-d-p-cute-baby.jpg',
    },
  ];
}

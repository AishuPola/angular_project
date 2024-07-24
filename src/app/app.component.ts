import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import {MoviesComponent} from './movies/movies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent,MoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
// imageurl="https://img.freepik.com/premium-photo/cute-little-girls-picture-ai-generated_1003721-472.jpg";
// title='aishwarya';
}

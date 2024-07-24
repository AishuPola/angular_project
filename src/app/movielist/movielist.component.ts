import { Component } from '@angular/core';
import {MoviesComponent} from 

@Component({
  selector: 'app-movielist',
  standalone: true,
  imports: [MoviesComponent],
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.scss',
})
export class MovielistComponent {}

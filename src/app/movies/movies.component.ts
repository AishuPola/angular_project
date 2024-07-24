import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
@Input() name= "Vikram";
@Input()  poster="https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg";
@Input()  rating="";
@Input()  summary= "Members of a black ops team must track and eliminate a gang of masked murderers."


}

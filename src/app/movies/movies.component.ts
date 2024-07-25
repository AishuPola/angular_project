import { Component, Input } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { Imovie } from '../app.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {
  @Input() name = 'Vikram';
  @Input() poster =
    'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg';
  @Input() rating = '';
  @Input() summary = '';

  show = true;
  summaryy() {
    // this.summary.push(this.summary)
    if (this.show == true) {
      this.show = false;
    } else {
      this.show = true;
    }

    //this.show=!this.show.
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { Imovie } from '../app.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    CounterComponent,
    MatSlideToggleModule,
    MatButtonModule,
    RouterLink,

    MatBadgeModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {
  // @Input() movie={
  @Input() name = 'Vikram';
  @Input() poster =
    'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg';
  @Input() rating = 0;
  @Input() summary = '';
  @Input() Index = 0;
  @Input() trailer = '';

  @Input() id!: string;
  @Output() deleteMovieEvent = new EventEmitter<string>();
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
  delete() {
    console.log(this.id);
    // this.deleteMovieEvent.emit();
    this.deleteMovieEvent.emit(this.id);
  }
}

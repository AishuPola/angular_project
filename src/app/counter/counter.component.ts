import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  like = 0;
  dislike = 0;
  likeIncrement() {
    this.like = this.like + 1;
  }
  dislikeIncrement() {
    this.dislike = this.dislike + 1;
  }
}

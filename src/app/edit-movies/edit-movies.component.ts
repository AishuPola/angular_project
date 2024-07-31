import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-edit-movies',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-movies.component.html',
  styleUrl: './edit-movies.component.scss',
})
export class EditMoviesComponent {
  name: string = '';
  poster: string = '';
  summary: string = '';
  rating: number = 0;

  constructor(
    private Moviesservice: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  editMovie() {
    let id = this.route.snapshot.paramMap.get('id') as string;
    this.Moviesservice.editMovieP(
      id,
      this.name,
      this.poster,
      this.summary,
      this.rating
    ).then(() => {
      // Move to movies page
      this.router.navigate(['movies']);
    });
  }
}

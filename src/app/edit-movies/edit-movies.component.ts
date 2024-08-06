import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-movies',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './edit-movies.component.html',
  styleUrl: './edit-movies.component.scss',
})
export class EditMoviesComponent {
  movieForm!: FormGroup;
  name: string = '';
  poster: string = '';
  summary: string = '';
  rating: number = 0;

  constructor(
    private Moviesservice: MoviesService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.movieForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      poster: '',
      rating: [
        '',
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      summary: '',
      trailer: '',
    });
  }
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

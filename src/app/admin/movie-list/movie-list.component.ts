import { MovieDialogComponent } from './../movie-dialog/movie-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from './../../models/movie';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService: MovieService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMoviesApi().subscribe({
      next: (result: any) => {
        console.log(result)
        this.movies = result.content;
      },
      error: e => {
        console.log(e.error.content)
      }
    })
  }

  openDialogAdd() {
    let dialogRef = this.dialog.open(MovieDialogComponent, {
      width: '750px',
      height: '510px',
    })
  }

  onDelete(movieCode: string) {
    this.movieService.deleteMovie(movieCode).subscribe({
      next: result => {
        console.log(result);
        alert('Movie deleted');
        this.getMovies();
      },
      error: e => {
        console.log(e);
      }
    })
  }
}

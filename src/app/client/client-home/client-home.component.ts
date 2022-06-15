import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent implements OnInit {

  movies: Movie[] = []
  topPicks: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMoviesApi().subscribe({
      next: (value: any) => {
        this.movies = value.content;
        this.topPicks = this.movies.slice(0, 5);
        console.log(this.movies)
        console.log(this.topPicks)
      },
      error: (e) => console.log("GET failed: ", e),
    })
  }

  openTrailer(url: string) {
    window.open(url, "_blank")
  }
}

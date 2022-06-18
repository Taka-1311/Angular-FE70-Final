import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie!: Movie
  idDetail!: any
  trailerId: string = "https://www.youtube.com/embed/"

  constructor(private activateRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovieDetail();
  }

  getMovieDetail() {
    this.activateRoute.queryParams.subscribe((param: any) => {
      this.idDetail = param;
      console.log(this.idDetail)
    })
    this.movieService.getMovieDetail(this.idDetail.id).subscribe({
      next: (value: any) => {
        this.movie = value.content;
      },
      error: (e) => console.log("GET failed: ", e),
    })
  }

  readTrailerId(string: string) {
    const isEmbeded: string = "https://www.youtube.com/embed/"
    const isWatch: string = "https://www.youtube.com/watch?v="

    if (string[isEmbeded.length] === '/') {
      this.trailerId += string.slice(+string[isEmbeded.length + 1], string.length)
      console.log(this.trailerId)
    } else if (string[isWatch.length] === '=') {
      this.trailerId += string.slice(+string[isWatch.length + 1], string.length)
      console.log(this.trailerId)
    }
  }

}

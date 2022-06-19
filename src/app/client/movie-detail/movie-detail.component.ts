import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/movie';
import { Component, OnInit, Sanitizer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie = new Movie();
  idDetail!: any
  iframeSrc: string = "https://www.youtube.com/embed/"
  videoUrl: SafeResourceUrl = '';

  constructor(private activateRoute: ActivatedRoute, private movieService: MovieService, private santitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getMovieDetail()
  }

  getMovieDetail() {
    this.activateRoute.queryParams.subscribe((param: any) => {
      this.idDetail = param;
      this.movieService.getMovieDetail(this.idDetail.id).subscribe({
        next: (value: any) => {
          this.movie = value.content;
          this.readTrailerId(this.movie.trailer)
        },
        error: (e) => console.log("GET failed: ", e),
      })

    })
  }

  readTrailerId(string: string): any {
    const isEmbeded: string = "https://www.youtube.com/embed/"
    const isWatch: string = "https://www.youtube.com/watch?v="
    const isDefault: string = "https://youtu.be/"

    if (string[isEmbeded.length - 1] === '/') {
      const videoCode = string.slice(30, (string.length))
      this.iframeSrc += videoCode
      this.videoUrl = this.santitizer.bypassSecurityTrustResourceUrl(this.iframeSrc)
    }
    else if (string[isWatch.length - 1] === '=') {
      const videoCode = string.slice(32, (string.length))
      this.iframeSrc += videoCode
      this.videoUrl = this.santitizer.bypassSecurityTrustResourceUrl(this.iframeSrc)
    }
    else if (string[isDefault.length - 1] === '/') {
      const videoCode = string.slice(17, (string.length))
      this.iframeSrc += videoCode
      this.videoUrl = this.santitizer.bypassSecurityTrustResourceUrl(this.iframeSrc)
    }
  }
}

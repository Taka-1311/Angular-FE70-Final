import { MovieService } from './../../services/movie.service';
import { MovieUpload } from './../../models/movie-upload';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.scss']
})
export class MovieDialogComponent implements OnInit {

  movie: MovieUpload = new MovieUpload();
  file: any[] = [];

  constructor(private movieService: MovieService, public dialogRef: MatDialogRef<MovieDialogComponent>) { }

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    this.file = event.target.files
  }

  onCancel() {
    this.dialogRef.close();
  }

  addMovie() {
    let formData = new FormData();
    formData.append('maPhim', this.movie.maPhim.toString());
    formData.append('tenPhim', this.movie.tenPhim);
    formData.append('moTa', this.movie.moTa);
    formData.append('trailer', this.movie.trailer);
    formData.append('ngayKhoiChieu', this.movie.ngayKhoiChieu);
    formData.append('sapChieu', this.movie.sapChieu.toString());
    formData.append('dangChieu', this.movie.dangChieu.toString());
    formData.append('hot', this.movie.hot.toString());
    formData.append('danhGia', this.movie.danhGia.toString());
    formData.append('File', this.file[0])

    console.log(this.file)

    this.movieService.addMovie(formData).subscribe({
      next: result => {
        console.log(result);
        alert('New movie added');
        this.dialogRef.close()
      },
      error: e => {
        console.log(e);
      }
    })
  }
}

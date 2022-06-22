import { KEY_NAME, TOKEN_VALUE, ACCESS_TOKEN } from './../_Core/utils';
import { Movie } from './../models/movie';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class MovieService {

    constructor(private http: HttpClient) { }

    getMoviesApi(): Observable<Movie[]> {
        //Request header
        let headers = new HttpHeaders();
        headers = headers.set(KEY_NAME, TOKEN_VALUE);
        let movieArr: any = this.http.get('http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01', { headers: headers });
        return movieArr;
    }

    getMovieDetail(id: string): Observable<Movie> {
        let headers = new HttpHeaders();
        headers = headers.set(KEY_NAME, TOKEN_VALUE);
        let movie: any = this.http.get(`https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`, { headers: headers });
        return movie;
    }

    addMovie(movie: any): Observable<any> {
        let headers = new HttpHeaders({
            'TokenCybersoft': TOKEN_VALUE,
        });
        let ob = this.http.post('https://movienew.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh', movie, { headers: headers })
        return ob;
    }

    deleteMovie(movieCode: string): Observable<any> {
        let headers = new HttpHeaders({
            'Authorization': ACCESS_TOKEN,
            'TokenCybersoft': TOKEN_VALUE,
        });
        let ob = this.http.delete(`https://movienew.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${movieCode}`, { headers: headers },)
        return ob;
    }
}
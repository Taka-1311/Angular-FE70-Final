import { KEY_NAME, TOKEN_VALUE } from './../_Core/utils';
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
}
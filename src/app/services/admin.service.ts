import { KEY_NAME, TOKEN_VALUE } from './../_Core/utils';
import { Person } from '../models/person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { catchError, map, Observable, of, Subject, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})

export class AdminService {

    rawData: any = [];
    profiles: Person[] = [];
    private url = 'https://reqres.in/api/users';

    onAddPerson = new EventEmitter<Person>();
    onSave = new EventEmitter<Person>();

    constructor(private http: HttpClient) { }

    getProfiles(): Observable<Person[]> {
        return this.http.get<Person[]>(this.url).pipe(
            tap(_ => console.log('fetched raw data')),
            catchError(this.handleError<Person[]>('getProfiles', []))
        );
    }

    getUsers(): Observable<User[]> {
        //Request header
        let headers = new HttpHeaders();
        headers = headers.set(KEY_NAME, TOKEN_VALUE);
        let userArray: any = this.http.get('http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01', { headers: headers });
        return userArray;
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    onDelete(id: number): Person[] {
        const result = this.profiles.filter(person => person.id !== id);
        this.profiles = result;
        return this.profiles;
    }

}
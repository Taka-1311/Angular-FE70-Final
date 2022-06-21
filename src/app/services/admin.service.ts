import { KEY_NAME, TOKEN_VALUE, ACCESS_TOKEN } from './../_Core/utils';
import { Person } from '../models/person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { catchError, map, Observable, of, Subject, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})

export class AdminService {

    // onAddPerson = new EventEmitter<Person>();
    onSave = new EventEmitter<Person>();

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        //Request header
        let headers = new HttpHeaders();
        headers = headers.set(KEY_NAME, TOKEN_VALUE);
        let userArray: any = this.http.get('http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01', { headers: headers });
        return userArray;
    }

    addUser(user: any): Observable<any> {
        let headers = new HttpHeaders({
            'Authorization': ACCESS_TOKEN,
            'TokenCybersoft': TOKEN_VALUE,
        });
        let ob = this.http.post('https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung', user, { headers: headers })
        return ob;
    }

    deleteUser(user: any): Observable<any> {
        let headers = new HttpHeaders({
            'Authorization': ACCESS_TOKEN,
            'TokenCybersoft': TOKEN_VALUE,
        });
        let ob = this.http.post('https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung', user, { headers: headers })
        return ob;
    }

    // onDelete(id: number): Person[] {
    //     const result = this.profiles.filter(person => person.id !== id);
    //     this.profiles = result;
    //     return this.profiles;
    // }

}
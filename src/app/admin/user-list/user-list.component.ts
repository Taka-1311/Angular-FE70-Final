import { User } from './../../models/user';
import { PersonDialogEditComponent } from './../person-dialog-edit/person-dialog-edit.component';
import { PersonDialogComponent } from './../person-dialog/person-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from './../../services/admin.service';
import { Person } from './../../models/person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  page: number = 1;
  profiles: User[] = [];

  constructor(private adminService: AdminService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getUsers()
  }

  public getUsers() {
    this.adminService.getUsers().subscribe({
      next: (result: any) => {
        console.log(result)
        this.profiles = result.content
      },
      error: (e) => console.log('get failed: ', e.message)
    })
  }

  onDelete(taiKhoan: string) {
    this.adminService.deleteUser(taiKhoan).subscribe({
      next: result => {
        console.log(result)
        this.getUsers();
        alert('Xoá thành công')
      },
      error: e => {
        console.log(e);
        alert(e.error.content)
      }
    })
  }

  openDialogAdd(): void {
    let dialogRef = this.dialog.open(PersonDialogComponent, {
      height: '520px',
      width: '300px',
    });
  }

  openEditDialog(u: User): void {
    let dialogRef = this.dialog.open(PersonDialogEditComponent, {
      height: '520px',
      width: '300px',
      data: u,
    })
  }

}

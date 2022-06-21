import { AdminService } from '../../services/admin.service';
import { Person } from '../../models/person';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.scss']
})
export class PersonDialogComponent implements OnInit {

  user: User = new User();
  role: string = '';
  userRole = [
    { value: 'KhachHang', name: 'Khách hàng' },
    { value: 'QuanTri', name: 'Quản trị' },
  ]

  constructor(private adminService: AdminService, public dialogRef: MatDialogRef<PersonDialogComponent>) { }

  ngOnInit(): void {

  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onAddPerson(): void {
    const addedUser = { ...this.user, maNhom: 'GP01' }
    console.log(addedUser);
    this.adminService.addUser(addedUser).subscribe({
      next: result => {
        console.log(result);
        alert('Thêm người dùng thành công')
        this.adminService.getUsers();
        this.dialogRef.close();
      },
      error: e => {
        console.log(e)
        alert(e.error.content)
      }
    })
  }
}

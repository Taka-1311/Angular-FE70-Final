import { AdminService } from '../../services/admin.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-person-dialog-edit',
  templateUrl: './person-dialog-edit.component.html',
  styleUrls: ['./person-dialog-edit.component.scss']
})
export class PersonDialogEditComponent implements OnInit {

  editedPerson: User = new User();
  savedPerson: any
  userRole = [
    { value: 'KhachHang', name: 'Khách hàng' },
    { value: 'QuanTri', name: 'Quản trị' },
  ]

  constructor(private adminService: AdminService, @Inject(MAT_DIALOG_DATA) public data: User, private dialogRef: MatDialogRef<PersonDialogEditComponent>) {
    this.editedPerson = { ...data };
  }

  ngOnInit(): void {
  }

  onCloseDialog() {
    this.dialogRef.close();
  }

  onSave() {
    this.savedPerson = { ...this.editedPerson, maNhom: 'GP01' }
    console.log(this.savedPerson);
    this.adminService.updateUser(this.savedPerson).subscribe({
      next: result => {
        console.log(result);
        alert('User updated');
        this.dialogRef.close();
      },
      error: e => {
        console.log(e)
        alert(e.error.content);
      }
    });
  }

}

import { AdminService } from '../../services/admin.service';
import { Person } from '../../models/person';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-person-dialog-edit',
  templateUrl: './person-dialog-edit.component.html',
  styleUrls: ['./person-dialog-edit.component.scss']
})
export class PersonDialogEditComponent implements OnInit {

  editedPerson: Person = new Person();

  constructor(private adminService: AdminService, @Inject(MAT_DIALOG_DATA) public data: Person, private dialogRef: MatDialogRef<PersonDialogEditComponent>) {
    this.editedPerson = { ...data };
  }

  ngOnInit(): void {
  }

  onCloseDialog() {
    this.dialogRef.close();
  }

  onSave() {
    this.adminService.onSave.emit(this.editedPerson);
    this.dialogRef.close();
  }

}

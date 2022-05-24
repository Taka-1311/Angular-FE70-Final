import { AdminService } from '../../services/admin.service';
import { Person } from '../../models/person';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.scss']
})
export class PersonDialogComponent implements OnInit {

  person: Person = new Person();

  constructor(private adminService: AdminService, public dialogRef: MatDialogRef<PersonDialogComponent>) { }

  ngOnInit(): void {

  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onAddPerson(): void {
    let i = Math.floor(Math.random() * 70)
    let randomImgUrl = `https://i.pravatar.cc/128?img=${i}`;

    this.person.avatar = randomImgUrl;
    this.person.id = this.adminService.profiles.length + 1;

    this.adminService.onAddPerson.emit(this.person);
    this.dialogRef.close();
    console.log('emit', this.person)
  }
}

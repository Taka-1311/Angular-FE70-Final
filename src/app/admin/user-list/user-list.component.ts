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
  profiles: Person[] = [];

  constructor(private adminService: AdminService, public dialog: MatDialog) {
    adminService.onAddPerson.subscribe(person => {
      this.profiles = [...this.profiles, person];
      adminService.profiles = this.profiles;
    })

    adminService.onSave.subscribe(person => {
      for (let index in this.profiles) {
        if (this.profiles[index].id === person.id) {
          this.profiles[index] = person;
          adminService.profiles = this.profiles;
        }
      }
    })
  }

  ngOnInit(): void {
    this.getProfiles();
  }

  openDialogAdd(): void {
    let dialogRef = this.dialog.open(PersonDialogComponent, {
      height: '320px',
      width: '300px',
    });
  }

  openEditDialog(p: Person): void {
    let dialogRef = this.dialog.open(PersonDialogEditComponent, {
      height: '320px',
      width: '300px',
      data: p,
    })
  }

  getProfiles() {
    this.adminService.getProfiles().subscribe((data: any) => {
      this.adminService.rawData = data;
      this.adminService.profiles = this.adminService.rawData.data;
      this.profiles = this.adminService.profiles;
    })
  }

  onDelete(id: number): void {
    this.profiles = this.adminService.onDelete(id);
  }

}
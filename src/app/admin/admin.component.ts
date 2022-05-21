import { PersonDialogEditComponent } from './person-dialog-edit/person-dialog-edit.component';
import { PersonDialogComponent } from './person-dialog/person-dialog.component';
import { CRUDService } from '../services/crud.service';
import { Person } from '../models/person';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  profiles: Person[] = [];

  constructor(private crudService: CRUDService, public dialog: MatDialog) {
    crudService.onAddPerson.subscribe(person => {
      this.profiles = [...this.profiles, person];
      crudService.profiles = this.profiles;
    })

    crudService.onSave.subscribe(person => {
      for (let index in this.profiles) {
        if (this.profiles[index].id === person.id) {
          this.profiles[index] = person;
          crudService.profiles = this.profiles;
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
    this.crudService.getProfiles().subscribe((data: any) => {
      this.crudService.rawData = data;
      this.crudService.profiles = this.crudService.rawData.data;
      this.profiles = this.crudService.profiles;
    })
  }

  onDelete(id: number): void {
    this.profiles = this.crudService.onDelete(id);
  }


}

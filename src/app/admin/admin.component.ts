import { PersonDialogEditComponent } from './person-dialog-edit/person-dialog-edit.component';
import { PersonDialogComponent } from './person-dialog/person-dialog.component';
import { AdminService } from '../services/admin.service';
import { Person } from '../models/person';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  term: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

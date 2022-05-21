import { NgMaterialModule } from '../ng_materials/material.module';
import { NgModule } from '@angular/core';
import { CrudComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonDialogComponent } from './person-dialog/person-dialog.component';
import { PersonDialogEditComponent } from './person-dialog-edit/person-dialog-edit.component';


@NgModule({
  imports: [
    NgMaterialModule,
    FormsModule,
    CommonModule,
  ],
  exports: [
    CrudComponent,
  ],
  declarations: [
    CrudComponent,
    PersonDialogComponent,
    PersonDialogEditComponent
  ],
})
export class CRUDModule { }

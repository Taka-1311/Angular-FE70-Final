import { NgxPaginationModule } from 'ngx-pagination';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgMaterialModule } from '../ng_materials/material.module';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonDialogComponent } from './person-dialog/person-dialog.component';
import { PersonDialogEditComponent } from './person-dialog-edit/person-dialog-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';
import { MovieDialogEditComponent } from './movie-dialog-edit/movie-dialog-edit.component';

const adminRoute: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: '', component: AdminHomeComponent },
      { path: 'home', component: AdminHomeComponent },
      { path: 'userlist', component: UserListComponent },
      { path: 'userlist/search', component: UserSearchComponent },
      { path: 'movielist', component: MovieListComponent },
    ]
  },
]

@NgModule({
  imports: [
    NgxPaginationModule,
    NgMaterialModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(adminRoute),
  ],
  exports: [
  ],
  declarations: [
    AdminComponent,
    PersonDialogComponent,
    PersonDialogEditComponent,
    UserListComponent,
    AdminHomeComponent,
    UserSearchComponent,
    MovieListComponent,
    MovieDialogComponent,
    MovieDialogEditComponent,
  ],
})
export class AdminModule { }

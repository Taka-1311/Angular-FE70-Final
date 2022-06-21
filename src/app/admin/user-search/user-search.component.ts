import { AdminService } from './../../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  usersSearch: User[] = []
  // searchTerm: string = '';

  constructor(private activateRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    this.getSearchTerm();
  }

  getSearchTerm() {
    this.activateRoute.queryParams.subscribe((param: any) => {
      this.adminService.searchUser(param.term).subscribe({
        next: result => {
          console.log(result);
          this.usersSearch = result.content;
        },
        error: e => {
          console.log(e);
        }
      })
    })
  }

  onDelete(taiKhoan: string) {
    this.adminService.deleteUser(taiKhoan).subscribe({
      next: result => {
        console.log(result)
        this.getSearchTerm();
        alert('Xoá thành công')
      },
      error: e => {
        console.log(e);
        alert(e.error.content)
      }
    })
  }

  openEditDialog() {

  }
}

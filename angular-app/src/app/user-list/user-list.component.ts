import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { Router } from '@angular/router';
import { User } from '../entity/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private usersList:User[];

  constructor(private userService:UsersService, private router:Router) { }

  ngOnInit() {
    this.loadUsersList();
  }

  loadUsersList(){
      this.userService.getAllUserDetails().subscribe(

        data => {
          console.log(data)
           this.usersList =data;    
        },
        error => {
          console.log(error)
          this.router.navigate(['error']);
        }
      )
  }

  createUser(){
   this.router.navigate(['user',-1]);
  }

  editUser(id){
    this.router.navigate(['user',id]);
  }
}

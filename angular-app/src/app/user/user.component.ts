import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../entity/user';
import { Name } from '../entity/name';
import { Address } from '../entity/address';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private id:number;
  private user:User;
  constructor(	private router:Router, 
    private route:ActivatedRoute,
    private userService:UsersService) { }

    ngOnInit() {
      //Must initialize the class
      this.id = this.route.snapshot.params['id'];
      if(this.id!=null && this.id > 0){
      this.getUserDetailsById();
      }
      else{
      this.user = new User();
      this.user.name = new Name();
      this.user.address = new Address();
      }
      }
    
      getUserDetailsById(){
      this.userService.retriveUserDetails(this.id).subscribe(
        response =>{
          this.user = response;
        }
      )
      }
      saveOrUpdateUser(){
       console.log("Creating user !!!");
       console.log(JSON.stringify(this.user));
       if(this.id!=null && this.id > 0){
      this.updateUser();
       }else{
      this.saveUser();
       }
       //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user));
      }
    
      saveUser(){
      this.userService.createUser(this.user).subscribe(
        response => {
          console.log(JSON.stringify(response));
          this.router.navigate(['user-list']);
        }
      )
      }
    
      updateUser(){
      this.userService.updateUserDetails(this.user).subscribe(
        response => {
          console.log(JSON.stringify(response));
          this.router.navigate(['user-list']);
        }
      )
       }
    
       goToPreviousPage(){
         this.router.navigate(['user-list']);
       }
    

}

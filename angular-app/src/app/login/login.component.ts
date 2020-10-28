import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { TokenDetails } from '../entity/token-details';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username : string = 'esayapp';
  password : string = 'dummy';
  errorMessage : string = 'Invalid Credentials';
  invalidLogin : Boolean = false;
  tokenDetails : TokenDetails;
  constructor(private loginService:LoginService, private router:Router) { }
  
  ngOnInit() {
  }
  
  authenticateUser(){
    this.loginService.JWTAuthenticationService(this.username, this.password).subscribe(

      data => {
        console.log(data)
         this.tokenDetails =data;
        sessionStorage.setItem('USER', this.username);
         sessionStorage.setItem('authentication', `Bearer ${this.tokenDetails.token}`);
         sessionStorage.setItem('masterUserId', `${this.tokenDetails.masterUserId}`);
        this.router.navigate(['dashboard'])
        this.invalidLogin = false      
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }
}

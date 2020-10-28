import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../entity/user';
import { API_URl } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getAllUserDetails(){
    let headers = new HttpHeaders({
      Authorization: sessionStorage.getItem('authentication')
    });
    //console.log("Welcome service is getting call !!");
     return this.http.get<User[]>(`${API_URl}/user/getAll`,{headers});
  }

  deleteUser(username, id){
    let headers = new HttpHeaders({
      Authorization: sessionStorage.getItem('authentication')
    });
    console.log("Delete todo request sending !!");
     return this.http.delete(`${API_URl}/user/${username}/todos/${id}`,{headers});
  }

  retriveUserDetails(id){
    let headers = new HttpHeaders({
      Authorization: sessionStorage.getItem('authentication')
    });
    return this.http.get<User>(`${API_URl}/user/getById/${id}`,{headers});
  }

  updateUserDetails(company){
    let headers = new HttpHeaders({
      Authorization: sessionStorage.getItem('authentication')
    });
    return this.http.post<User>(`${API_URl}/user/update/`,company,{headers});
  }

  createUser(company){
    let headers = new HttpHeaders({
      Authorization: sessionStorage.getItem('authentication')
    });
    return this.http.post<User>(`${API_URl}/user/save`, company,{headers});
  }
}

import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public users:any={
    admin:{password:'12345',roles:['ADMIN','STUDENT']},
    user1:{password:'12345',roles:['STUDENT']}
  }
  public username:any ;
  public isAuthenticate: boolean =false;
  public roles:string[]=[];

  constructor(private router :Router) { }
  public login(username:string,password:string){
   if (this.users[username] && this.users[username]['password']==password){
     this.username=username;
     this.isAuthenticate=true;
     this.roles=this.users[username]['roles'];
     return true;
   }
   return false;
  }
  public logout(){
    this.username=undefined;
    this.isAuthenticate=false;
    this.roles=[];
    this.router.navigateByUrl("/")
  }
}

import {ActivatedRouteSnapshot, GuardResult, MaybeAsync, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";
@Injectable()
export class AuthorizationGuard {
  constructor(private authservice:AuthService,private router:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.authservice.isAuthenticate){
      let requiredRoles=route.data['roles'];
      let userRoles = this.authservice.roles;
      for (let i = 0; i < userRoles.length; i++) {
        if(requiredRoles.include(userRoles[i])){
          return true;
        }
      }
      return false;
    }else{
      this.router.navigateByUrl("/login");
      return false;
    }
  }

}

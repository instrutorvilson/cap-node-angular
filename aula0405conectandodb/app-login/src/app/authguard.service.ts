import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DecodeTokenService } from './decode-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private decodeToken: DecodeTokenService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(!this.temUsuarioLogado()){
       this.router.navigate(['/login'])
    }
    return true; 
  }
  temUsuarioLogado(): boolean {
    let token = this.decodeToken.decodeTokenJWT()
    return token != ""; 
  }
}

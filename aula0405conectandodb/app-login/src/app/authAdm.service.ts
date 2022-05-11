import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { DecodeTokenService } from './decode-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdm implements CanActivate  {

  constructor(private decodeToken: DecodeTokenService,
    private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
     boolean | Observable<boolean> {
     if(!this.temUsuarioLogado()){
        this.router.navigate(['/login'])
        return false
     }
     
     if(!this.ehAdministrador()){
       this.router.navigate(['/erro'])
     }

     return true;
  }

  temUsuarioLogado(): boolean {
    let token =  this.decodeToken.decodeTokenJWT()
    return token != ""; 
  }

  ehAdministrador(){
    let token =  JSON.stringify(this.decodeToken.decodeTokenJWT())
    let ob = JSON.parse(token)
    return ob.perfil == "ADM"
  }
}

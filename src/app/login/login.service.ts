import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  onstructor() { }

  login(usuario : String, password : String) : void {
    sessionStorage.setItem("isLogged", 'true');
  }

  logout() : void{
    sessionStorage.clear();
  }

  isLogged() : boolean {
    
    return !!sessionStorage.getItem("isLogged");
  }
}

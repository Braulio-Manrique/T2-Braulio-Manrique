import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private login : LoginService, private router : Router) {
    
  }

  submit(usuario: HTMLInputElement, password: HTMLInputElement) {
    this.login.login(usuario.value, password.value);
    this.router.navigateByUrl("/dashboard");
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../ auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.username, this.password);
    this.router.navigate(['/dashboard']);
  }
}

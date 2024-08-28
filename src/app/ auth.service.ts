import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  login(username: string, password: string) {
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
  }
}

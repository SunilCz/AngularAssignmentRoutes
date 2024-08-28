import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  saveContact(contact: any) {
    localStorage.setItem('contact', JSON.stringify(contact));
  }

  getContact() {
    return JSON.parse(localStorage.getItem('contact') ?? 'null');
  }
}

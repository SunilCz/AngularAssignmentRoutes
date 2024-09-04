import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  name = '';
  address = '';
  phone = '';

  constructor(private contactService: ContactService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.contactService.saveContact({
        name: this.name,
        address: this.address,
        phone: this.phone,
      });

      form.resetForm();
    }
  }
}

import { Component } from '@angular/core';
import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  contact: any;

  constructor(private contactService: ContactService) {
    this.contact = this.contactService.getContact();
  }
}

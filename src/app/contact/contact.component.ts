import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

person = {
  name: '',
  email: '',
  phoneNumber: '',
  coment: '',
};

process(){
  console.log(this.person);
};

}

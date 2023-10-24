import { Component } from '@angular/core';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
})
export class AccountantComponent {

  number: number = 1;

  increase() {
    this.number++;
  }

  decrease() {
    this.number--;
  }


  disabled: boolean = true;

}

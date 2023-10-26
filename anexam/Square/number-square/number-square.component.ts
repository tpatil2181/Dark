import { Component } from '@angular/core';

@Component({
  selector: 'app-number-square',
  templateUrl: './number-square.component.html',
  styleUrls: ['./number-square.component.css']
})
export class NumberSquareComponent {
  userNumber: number=0;
  square: number=0;

  calculateSquare() {
    this.square = this.userNumber * this.userNumber;
  }

};

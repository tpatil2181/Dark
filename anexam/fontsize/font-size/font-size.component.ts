import { Component } from '@angular/core';

@Component({
  selector: 'app-font-changer',
  templateUrl: './font-changer.component.html',
  styleUrls: ['./font-changer.component.css']
})
export class FontChangerComponent {
  fontSize: number = 16; // Default font size

  //if second code is apply then write only above code//
  applyFontSize() {
    // Ensure the font size is within a reasonable range, e.g., between 8 and 48
    this.fontSize = Math.min(Math.max(this.fontSize, 8), 48);
  }
}


// slkasjfaojd//
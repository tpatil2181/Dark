import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { ClassComponent } from './class/class.component';
import { CollegeComponent } from './college/college.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent, // Add ClassComponent to declarations
    CollegeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to the imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

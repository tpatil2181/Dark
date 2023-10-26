import { Component } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent {
  rollNo: number;
  studentInfo: any;

  fetchStudentInfo() {
    // You can implement a service to fetch student information based on the roll number.
    // For simplicity, let's assume a static student object here.
    this.studentInfo = {
      rollNo: this.rollNo,
      name: 'John Doe',
      course: 'Computer Science',
    };
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfoAppComponent } from './student-info-app.component';

describe('StudentInfoAppComponent', () => {
  let component: StudentInfoAppComponent;
  let fixture: ComponentFixture<StudentInfoAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentInfoAppComponent]
    });
    fixture = TestBed.createComponent(StudentInfoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

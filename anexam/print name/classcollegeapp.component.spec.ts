import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasscollegeappComponent } from './classcollegeapp.component';

describe('ClasscollegeappComponent', () => {
  let component: ClasscollegeappComponent;
  let fixture: ComponentFixture<ClasscollegeappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasscollegeappComponent]
    });
    fixture = TestBed.createComponent(ClasscollegeappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

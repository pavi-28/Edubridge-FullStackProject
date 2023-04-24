import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentComponent } from './updatestudent.component';

describe('UpdatestudentComponent', () => {
  let component: UpdateStudentComponent;
  let fixture: ComponentFixture<UpdateStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

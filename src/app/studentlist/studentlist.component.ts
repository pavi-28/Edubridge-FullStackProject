import { Component, OnInit } from '@angular/core';
import { Student } from '../student'
import { StudentService } from '../student.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
//here we are creating methods to view all the student details like update, delete, view by Id, fetching by grades ,course and remove all the details.
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  firstName: String = '';
  studentFoundBySearch: Student[] = [];
  gradeValue: number = 0;

  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }
  private getStudents() {
    this.studentService.getStudentsList().subscribe(data => {
      this.students = data;


    });
  }

  studentDetails(studentId: number) {
    console.log("hi");
    this.router.navigate(['studentdetails', studentId]);
  }

  course(student: Student) {
    console.log(student.grade)
    if (student.grade >= 6 && student.grade <= 10) {
      student.isLowerGrade = true;
      console.log('from  studn comp' + student.isLowerGrade);
      this.router.navigate(['course', true]);
    }
    else {
      student.isLowerGrade = false;
      this.router.navigate(['course', false]);
    }
  }

  updateStudent(studentId: number) {
    this.router.navigate(['updatestudent', studentId]);
  }

  deleteStudent(studentId: number) {
    this.studentService.deleteStudent(studentId).subscribe(data => {
      console.log(data);
      this.getStudents();
    })

  }
  confirmDelete(student: Student) {
    var status = confirm("You want to delete this record?");
    if (status == true) {
      this.deleteStudent(student.studentId);
    }
    else {
      this.getStudents();
    }

  }
  confirmUpdate(student: Student) {
    var status = confirm("You want to update this record?");
    if (status == true) {
      this.updateStudent(student.studentId);
    }
    else {
      this.getStudents();
    }
  }

 /* confirmUpdateOk(){
    var status=confirm("Update Successfully");
    if(status==true){
      this.router.navigate(['students']);
    }
    else{
      this.router.navigate(['updatestudent']);
    }
  }*/
  removeAllStudents(): void {
    var status = confirm(" you want to remove all the details?");
    if (status == true)
      this.studentService.deleteAll().subscribe(
        data => {
          console.log(data);
          this.getStudents();
        },
        error => {
          console.log(error);
        }
      );
  }

  searchByName() {
    this.studentService.findByName(this.firstName).subscribe(data => {
      this.students = data;
      console.log(data);
    },
      error => {
        console.log(error);
      });
  }

  fetchByStandard(grade: any) {
    this.gradeValue = grade.target.value;
    console.log(this.gradeValue);
    this.studentService.findByGrade(this.gradeValue).subscribe(
      data => {
        this.students = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  viewCourse(student: Student) {
    console.log(student.grade);
    console.log(student.isLowerGrade);
    if (student.grade >= 6 && student.grade <= 10) {
      student.isLowerGrade = true;
      console.log('studentComponent if condition ' + student.isLowerGrade);
      this.router.navigate(['course', true]);
    }
    else {
      student.isLowerGrade = false;
      console.log("studentComponent else condition " + student.isLowerGrade);
      this.router.navigate(['course', false]);
    }
  }
  /*fetchByStandard(grade: any) {
    this.gradeValue = grade.target.value;
    console.log(this.gradeValue);
    this.studentService.findByGrade(this.gradeValue).subscribe(data => {
      this.students = data;
      console.log(data);
    },
    error =>{
      console.log(error);
    });
  }*/
}

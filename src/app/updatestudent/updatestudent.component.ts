import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdateStudentComponent implements OnInit {
  /*studentName = '';
  contactNo = '';
  grade='';
  email = '';
  dateOfBirth = '';
  city = '';*/
  studentId: number = 0;
  student: Student = new Student();
  constructor(private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['studentId'];

    this.studentService.getStudentById(this.studentId).subscribe(data => {
      this.student = data;
    }, error => console.log(error));
  }
//by click onsubmit method allows users to submit their name and address using ngmodule(eventBinding)
  onSubmit(){
      if(this.student.studentName === '' || this.student.contactNo === '' || this.student.grade < 6 || this.student.email === '' || this.student.dateOfBirth === '' || this.student.city === ''){
        let pop = confirm("It is mandatory to fill all the fields");
      }
      else{
        this.studentService.updateStudent(this.studentId, this.student).subscribe( data =>{
        this.confirmUpdateOk();
        console.log(data);
    }
    , error => console.log(error));
  }
}
  /*onSubmit() {
    this.studentService.updateStudent(this.studentId, this.student).subscribe(data => {
      this.goToStudentList();
    }
      , error => console.log(error));
  }*/
  goToStudentList() {
    this.router.navigate(['/students']);
  }
confirmUpdateOk(){
  var status = confirm("Successfully Updated")
  if(status == true){
    console.log("updated");
    this.goToStudentList();
  }
  else{
    this.router.navigate(['updatestudent'])
  }
}
}

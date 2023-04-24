import { Component , OnInit} from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreateStudentComponent implements OnInit {
  studentName='';
  contactNo='';
  grade='';
  email='';
  dateOfBirth='';
  city='';
  student: Student = new Student();
  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveStudent(){
    this.studentService.createStudent(this.student).subscribe( data =>{
      console.log(data);
      this.goToStudentList();
    },
    error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/students']);
  }
  
  /*onSubmit(){
    console.log(this.student);
    this.saveStudent();
  }*/
//by click onsubmit method allows users to submit their name and address using ngmodule(eventBinding)
onSubmit(){
    if(this.student.studentName === '' ||  this.student.contactNo === '' || this.student.grade < 1 || this.student.email === '' || this.student.dateOfBirth === '' || this.student.city === ''){
      let status = alert("It is mandatory to fill all the fields");
    }
    else{
      console.log(this.student)
      this.saveStudent();
    }
  }
  confirmCreate(){
    var status = confirm("Inserted Successfully");
    if(status==true){
      console.log("created");
      this.goToStudentList();
  }
  else{
    this.router.navigate(['createstudent'])
  }
  }
}

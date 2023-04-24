import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
/*Here we are implementing ngOnInit method for view by Id.ngOnInit method calls default constructor */
export class StudentDetailsComponent implements OnInit {
  studentId: number = 0;
  student: any = [];
  constructor(private route: ActivatedRoute, private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    console.log("view by id");
    this.studentId = this.route.snapshot.params['studentId'];

    this.student = new Student();
    this.studentService.getStudentById(this.studentId).subscribe( data => {
      this.student = data;
    });
  }
View(){
  var status = confirm("Go to student list");
  if(status==true){
    this.router.navigate(['students']);
  }
}
}

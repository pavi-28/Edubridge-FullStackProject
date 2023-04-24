import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{
 
  /*isLowerGrade : boolean= false;
  isHigherGrade : boolean = false;
 constructor(private router: Router, private route: ActivatedRoute) { }
ngOnInit(): void{
  this.isLowerGrade = this.route.snapshot.params['lowerGrade']; //false --> higher true lower
  console.log('i am from course '+ this.isLowerGrade);
  if(this.isLowerGrade == false){
    this.isHigherGrade = true;
  }
  console.log('i am from course'+ this.isHigherGrade);
}*/
isLowerGrade : boolean = true;
  lowGrade = '';

  constructor(private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.lowGrade = this.route.snapshot.params['lowerGrade'];
    console.log("lower grade " +this.lowGrade);

    
  }

  checkLowerGrade():boolean{
    if(this.lowGrade == 'true'){
      this.isLowerGrade = true;
      console.log("Lower grade");
    }
    else{
      this.isLowerGrade = false;
      console.log("Higher Grade");
    }

    return this.isLowerGrade;
  }

}

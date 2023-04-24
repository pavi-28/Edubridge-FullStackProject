import { Component } from '@angular/core';
import { Student } from '../student';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  constructor(public loginService:AuthenticationService, private router: Router) { }
  ngOnInit() {
    
  }
  //this method is used for validation
     confirmFeedback(){
      var status = confirm("Thanks for your Feedback");
      if(status == true){
        this.router.navigate(['logout'])
      }
     }
}

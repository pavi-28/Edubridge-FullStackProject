import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  email='';
  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }
  ngOnInit(): void {
   
  }
  forgotPassword(){
    if(this.email === ''){
      var status = confirm("It is mandatory to fill  the fields");
    }
    else{
    var status = confirm("Successfully reset");
    if(status==true){
      this.router.navigate(['login']);
    }
  }
  }
}

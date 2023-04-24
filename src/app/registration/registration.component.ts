import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username = '';
  phonenumber='';
  password ='';
  email='';
  confirmpassword ='';
  invalidLogin = false
  constructor(public loginService:AuthenticationService,private router:Router){}
  ngOnInit(){

  }
  //these method is used to required for entering the name, password, email and contact number.
checkPassword(){
  if(this.username === '' || this.phonenumber === ''|| this.email === '' ||  this.password ==='' || this.confirmpassword === ''){
    var status = confirm("It is mandatory to fill all the fields");
  }
  else{
  var status = confirm("Successfully Register");
  if(status==true){
    this.router.navigate(['login']);
  }
}
}
}
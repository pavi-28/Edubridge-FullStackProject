import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  username='';
  email='';
  subject='';
  comments='';
  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }
  ngOnInit(): void {
    
  }
  contact(){
    if(this.username === '' || this.email === '' ||  this.subject ==='' || this.comments === ''){
      var status = confirm("It is mandatory to fill all the fields");
    }
    else{
    var status = confirm("Successfully message send");
    if(status==true){
      this.router.navigate(['contact']);
    }
  }
  }
}

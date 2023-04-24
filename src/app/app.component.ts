import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*App component is an head component of subcomponent here we are giving our title for our project */
export class AppComponent {
  title = 'StudentManagement';
  constructor(public loginService:AuthenticationService, private router: Router) { }
  ngOnInit() {
    
  }
  /*These method is used to confirm logout by user */
  confirmLogout(){
    var status=confirm("Are you sure want to logout?");
    if(status==true){
      this.router.navigate(['logout']);
    }
    else{
      this.router.navigate(['feedback'])
    }
  }
}

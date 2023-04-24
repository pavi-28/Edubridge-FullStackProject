import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './studentlist/studentlist.component';
import { CreateStudentComponent } from './createstudent/createstudent.component';
import { UpdateStudentComponent } from './updatestudent/updatestudent.component';
import { StudentDetailsComponent } from './studentdetails/studentdetails.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ProfilecardComponent } from './profilecard/profilecard.component';
import {FeedbackComponent} from './feedback/feedback.component'
import { LogoutComponent } from './logout/logout.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { AuthGaurdService } from './auth-gaurd.service';

/* These are the path for subcomponents and we are importing students component */


const routes: Routes = [
  {path: 'students', component: StudentListComponent,canActivate:[AuthGaurdService]},
  {path: 'createstudent', component: CreateStudentComponent,canActivate:[AuthGaurdService]},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},  // these path is redirect to home page
  {path: 'updatestudent/:studentId', component: UpdateStudentComponent,canActivate:[AuthGaurdService]},
  {path: 'studentdetails/:studentId', component: StudentDetailsComponent,canActivate:[AuthGaurdService]},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'profilecard', component:ProfilecardComponent,canActivate:[AuthGaurdService]},
  {path: 'feedback', component:FeedbackComponent,canActivate:[AuthGaurdService]},
  {path: 'logout', component:LogoutComponent,canActivate:[AuthGaurdService]},
  {path: 'forgotpassword', component:ForgotpasswordComponent},
  {path: 'about', component:AboutComponent,canActivate:[AuthGaurdService]},
  {path: 'contact', component:ContactComponent,canActivate:[AuthGaurdService]}, 
  {path: 'welcome', component:WelcomeComponent},
  {path: 'home', component:HomeComponent,canActivate:[AuthGaurdService]},
  {path: 'course/:lowerGrade', component:CourseComponent,canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

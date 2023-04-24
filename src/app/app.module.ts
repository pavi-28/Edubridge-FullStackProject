import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './createstudent/createstudent.component';
import { StudentDetailsComponent } from './studentdetails/studentdetails.component';
import { StudentListComponent } from './studentlist/studentlist.component';
import { UpdateStudentComponent } from './updatestudent/updatestudent.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
 // we are importing head component for respective subcomponents
@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    StudentListComponent,
    UpdateStudentComponent,
    LoginComponent,
    RegistrationComponent,
    ProfilecardComponent,
    FeedbackComponent,
    LogoutComponent,
    ForgotpasswordComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    WelcomeComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DoctorComponent } from './doctor/doctor.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HelplineComponent } from './helpline/helpline.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DrKarthikPingleComponent } from './dr-karthik-pingle/dr-karthik-pingle.component';
import { DrVictorVinodBabuComponent } from './dr-victor-vinod-babu/dr-victor-vinod-babu.component';
import { DrNaliniComponent } from './dr-nalini/dr-nalini.component';
import { DrColComponent } from './dr-col/dr-col.component';

export const routes: Routes = [
    {'path':'','title':'Home',component:HomeComponent},
    {'path':'about','title':'About',component:AboutComponent},
    {'path':'doctor','title':'Find Doctor',component:DoctorComponent},
    {'path':'contact','title':'Contact',component:ContactComponent},
    {'path':'signup','title':'Sign Up',component:SignupComponent},
    {'path':'login','title':'LogIn',component:LoginComponent},
    {'path':'helpline','title':'Helpline',component:HelplineComponent},
    {'path':'appointment','title':'appointment',component:AppointmentComponent},
    {'path':'dr-karthik-pingle','title':'dr-karthik-pingle',component:DrKarthikPingleComponent},
    {'path':'dr-victor-vinod-babu','title':'dr-victor-vinod-babu',component:DrVictorVinodBabuComponent},
    {'path':'dr-nalini','title':'dr-nalini',component:DrNaliniComponent},
    {'path':'dr-col','title':'dr-col',component:DrColComponent},

];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DoctorComponent } from './doctor/doctor.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {'path':'','title':'Home',component:HomeComponent},
    {'path':'about','title':'About',component:AboutComponent},
    {'path':'doctor','title':'Find Doctor',component:DoctorComponent},
    {'path':'contact','title':'Contact',component:ContactComponent},
    {'path':'signup','title':'Sign Up',component:SignupComponent},
    {'path':'login','title':'LogIn',component:LoginComponent},
];

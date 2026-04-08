  import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
//import { UserComponent } from './user/user.component';
import { InfoComponent } from './info/info.component';
import { AdminComponent } from './admin/admin.component';


export const routes: Routes = [
   // <!-- Lecture 32 :   Header with Routing in Angular.   -->

   

    {path : 'about' , component : AboutComponent},

    {path : 'login' , component : LoginComponent},

    {path : 'contact' , component : ContactComponent},

    {path: '' , component : HomeComponent},

  //   {path : 'info' , component : InfoComponent}


    // Lecture : 34  Pass Data form One Page to Another 

   //  this line code is used in data pass with routerlink and with button clcik 
   
    {path : 'profile' , component : ProfileComponent},




    // this line code is used for the data pass with router 
    //{path : 'profile' , component : ProfileComponent , data : {name : 'shivam'}},



    // this route for Lecture : 35 Dyanamic Routing in angular

    //{path : 'user/:id/:name' , component : UserComponent},







// Lecture 58 : Routing lazy loading
// {path : 'admin' , component : AdminComponent},
// this above routing is only routing not lazy routing



// lazy routing example lecture 58 : lazy routing

{path : "admin" , loadComponent : ()=> import('./admin/admin.component').then((c)=>c.AdminComponent)},




  // this routes for Lecture 33 : 404 page

    {path : '**' , component : PageNotFoundComponent},



    
];  



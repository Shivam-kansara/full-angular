import { Component } from '@angular/core';
import { RouterOutlet,  RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {

  // Lecture 58 :  Route Lazy Loading in Angular
  // code write in app.roues and admin.ts and admin.html file
} 








/*   Lecture 57 : Upadate data with PUT API method

import { Component } from '@angular/core';
import { MyUserService } from './services/my-user.service';
import { user } from './interfaces/my-user';
import { FormsModule, NgForm, ɵInternalFormsSharedModule } from '@angular/forms';
import { log } from 'firebase/firestore/pipelines';



@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {

   //Lecture 57 : Upadate data with PUT API method
//in this lecture we used same api whcih is make in our previous lecture and name it is user also we used interface in this lecture 
 // we used same code and same api which is used in previous lecture and used my-user.ts file for interface and my-user.services.ts file for service


 
  users : user[] = [];

  updateUser : user | undefined
 constructor(private myuserService : MyUserService){
 }

 ngOnInit(){
  this.getuser();
 }

 getuser(){
   this.myuserService.getUser().subscribe((data : user[])=>{
    console.log(data);
    this.users = data;
  })
 }

 // for POST API
addUser(user : user){

  if(!this.updateUser){
   this.myuserService.saveUsers(user).subscribe ((data : user) => {
    if(data){
      this.getuser();
    }
  })    
}
// this code for PUT API 
else{
  const userData = {...user,id : this.updateUser.id}
  this.myuserService.changeUser(userData).subscribe ((data : user)=>{
    if(data){
      this.getuser();
    }
  })
}
}


 // for Delete API
deleteUser(id : string){
 
this.myuserService.deleteuser(id).subscribe((data : user) => {
  if(data){
    this.getuser()
  }
})
}


// for populate API

selectUser(id : string) {
  this.myuserService.updateUser(id).subscribe ((data : user) => {
    this.updateUser = data;
  })
}
} 

*/



































/* Lecture 56 : Populate Data in input fields with API

import { Component } from '@angular/core';
import { MyUserService } from './services/my-user.service';
import { user } from './interfaces/my-user';
import { FormsModule, NgForm, ɵInternalFormsSharedModule } from '@angular/forms';
import { log } from 'firebase/firestore/pipelines';



@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {

   //Lecture 56 : Populate Data in input fields with API
//in this lecture we used same api whcih is make in our previous lecture and name it is user also we used interface in this lecture 
 // we used same code and same api which is used in previous lecture and used my-user.ts file for interface and my-user.services.ts file for service


 
  users : user[] = [];

  updateUser : user | undefined
 constructor(private myuserService : MyUserService){
 }

 ngOnInit(){
  this.getuser();
 }

 getuser(){
   this.myuserService.getUser().subscribe((data : user[])=>{
    console.log(data);
    this.users = data;
  })
 }

 // for POST API
addUser(user : user){

  if(!this.updateUser){
   this.myuserService.saveUsers(user).subscribe ((data : user) => {
    if(data){
      this.getuser();
    }
  })    
}
else{
  console.log("updated user here" , user)
}
  }


 // for Delete API
deleteUser(id : string){
 
this.myuserService.deleteuser(id).subscribe((data : user) => {
  if(data){
    this.getuser()
  }
})
}


// for populate API

selectUser(id : string) {
  this.myuserService.updateUser(id).subscribe ((data : user) => {
    this.updateUser = data;
  })
}
} 

































/*  Lecture 55 : Delete API in angular
import { Component } from '@angular/core';
import { MyUserService } from './services/my-user.service';
import { user } from './interfaces/my-user';
import { FormsModule, NgForm, ɵInternalFormsSharedModule } from '@angular/forms';
import { log } from 'firebase/firestore/pipelines';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {

   // Lecture 55 : Delete API in angular
 // in this lecture we used same api whcih is make in our previous lecture and name it is user also we used interface in this lecture 
 // we used same code and same api which is used in previous lecture and used my-user.ts file for interface and my-user.services.ts file for service

 
  users : user[] = [];
 constructor(private myuserService : MyUserService){
 }

 ngOnInit(){
  this.getuser();
 }

 getuser(){
   this.myuserService.getUser().subscribe((data : user[])=>{
    console.log(data);
    this.users = data;
  })
 }

 // for POST API
addUser(user : user){
  this.myuserService.saveUsers(user).subscribe ((data : user) => {
    if(data){
      this.getuser();
    }
  })
}


 // for Delete API
deleteUser(id : string){
 
this.myuserService.deleteuser(id).subscribe((data : user) => {

  if(data){
    this.getuser()
  }
})
}

} 
*/

  















/* Lecture 54 : POST API in angular
 

import { Component } from '@angular/core';
import { MyUserService } from './services/my-user.service';
import { user } from './interfaces/my-user';
import { FormsModule, NgForm, ɵInternalFormsSharedModule } from '@angular/forms';
import { log } from 'firebase/firestore/pipelines';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {

   // Lecture 54 : POST API in angular
 // in this lecture we used same api whcih is make in our previous lecture and name it is user also we used interface in this lecture 
 // we used same code and same api which is used in previous lecture and used my-user.ts file for interface and my-user.services.ts file for service

 
  users : user[] = [];
 constructor(private myuserService : MyUserService){
 }

 ngOnInit(){
  this.getuser();
 }

 getuser(){
   this.myuserService.getUser().subscribe((data : user[])=>{
    console.log(data);
    this.users = data;
  })
 }

addUser(user : user){
  this.myuserService.saveUsers(user).subscribe ((data : user) => {
    if(data){
      this.getuser();
    }
  })
}

}
*/
























/* // Lecture 53 : Define data type for API result
// in this lecture we used same api whcih is make in our previous lecture and name it is user also we used interface in this lecture 
 // we used same code and same api which is used in previous lecture
 //and used my-user.ts file for interface and my-user.services.ts file for service


mport { Component } from '@angular/core';
import { MyUserService } from './services/my-user.service';
import { user } from './interfaces/my-user';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
 users : user[] = [];
 constructor(private myuserService : MyUserService){

 }

 ngOnInit(){
  this.myuserService.getUser().subscribe((data : user[])=>{
    this.users = data;
    console.log(this.users)
  })
 }
}

*/






























 
/*   Lecture 52 : Integrate JSON Server API

// in this lecture we used same api whcih is make in our previous lecture and name it is user

import { Component } from '@angular/core';
import { MyUserService } from './services/my-user.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {

  users : any;
 constructor(private myuserService : MyUserService){

 }

 ngOnInit(){
  this.myuserService.getUser().subscribe((data : any)=>{
    this.users = data;
    console.log(this.users)
  })
 }

}

*/










/*  Lecture 51 : Install JSON Server and make API  


in this lecture we install json server and make api all the conetnt and learned about this lecture is in db.json file in api folder in my_angulrar

and other explination is in word file which is angular_paart2 Lecture no 51 : 

in this lecture we created api which name is user

*/





























/*  Lecture 50 : REST API call Services in Angular

import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
 // Lecture 50 : REST API call Services in Angular

//  we used the load data and mentor id

productdata : any
constructor(private productService : ProductService){
}

ngOnInit(){
  this.productService.myList().subscribe((data : any)=>{
    console.log(data);
    
    this.productdata = data.products;
  })
}
}
*/
























/*  Lecture 49 : API in Angular
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
  //  Lecture 49 : API in Angular
  // it is a theory lectuer in thid lecture we not write code so no code avilable for this lectuer 
  // in this lecture we learned theory concept and we write code in next lecture

}



















/*    Lecture 48 : Services in Angular

import { Component } from '@angular/core';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
  // Lecture 48 : Services in Angular
  //  we write code in product.service.ts file

  productData : {
    name: string;
    barnd: string;
    price: string;
} [] | undefined

  constructor(private ProductService : ProductService){
  }

 // if you display data with button click you are used this code 
 
 getproductData(){
   this.productData =  this.ProductService.getproductData()
   console.log(this.productData);
   
  } 


// if you display your data in ui without button click then you can use this code 
//
  ngOnInit(){
      this.productData =  this.ProductService.getproductData()
      console.log(this.productData);
  }
//
}

















































/* Lecture 47 : Component Life Cycle Method in Angular

import { afterNextRender, afterRender, Component, computed, effect, EventEmitter, Input, Output, Signal, signal, ViewChild, WritableSignal } from '@angular/core';
import { UserComponent } from './user/user.component';
import { NgIf } from '@angular/common';
              
        @Component({
        selector: 'app-root',
        imports: [UserComponent , NgIf],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  
        
  export class AppComponent {

    // Lecture 47 : Component Life Cycle Method in Angular
    // we used in this example user.html and user.ts file

    // code  for destryed component called in console
/*
   count = 0;

    updateCount(){
      this.count++;
    }
 */





// this below code for ngonchange() function
/*
    counter = 0;
    updaateCounter(){
      this.counter++; 
    }
*/


    // this code for the afternextRender and afterRender
/*
    @ViewChild('user') UserComponent : any
    
    counter = 0
    constructor(){
      afterRender(()=>{
        console.log("afterRender" , this.UserComponent.counter);
      })
      

      afterNextRender(()=>{
        console.log("afterNextRender");
        
      })
    }

    updatecounter(){
      this.counter++;
      
    }

}
*/












































      
/*  // Lecture 46 :  Custom Pipe in angular.  

other code is write in currencyconverter.pipe file
import { CurrencyconverterPipe } from './pipe/currencyconverter.pipe;
              
        @Component({
        selector: 'app-root',
        imports: [CurrencyconverterPipe],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

  export class AppComponent {

    // Lecture 46 :  Custom Pipe in angular.

    amount = 21;
}


























/*   Lecture 45 : Pipes in Angular  

import { CommonModule, CurrencyPipe } from '@angular/common';
              
        @Component({
        selector: 'app-root',
        imports: [CommonModule],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  


  export class AppComponent {
export class AppComponent {

 // Lecture 45 : Pipes in Angular  
// example of pipe
 title = "code by shivam kansara";

 name = "VIRAT KHOLI";

 // for date we use date method in angular
 date = new Date

 // for currency we used pipes 
 amount = 100;
}
































/*
  Lecture 44 : Pass Data child to parent component in angular 
import { Component, computed, effect, EventEmitter, Input, Output, Signal, signal, WritableSignal } from '@angular/core';
        import { UserComponent } from "./user/user.component";
              
        @Component({
        selector: 'app-root',
        imports: [UserComponent],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

  export class AppComponent {

  //  Lecture 44 : Pass Data child to parent component in angular 
  //onther code of this lecture in user.ts file and user.html file


  user : undefined | string[];
  handleUser(user : string[]){
  console.log(user);

  this.user = user
  
  }
}





















      

  /* Lecture 43 : Reuse componnet in angular.
    import { UserComponent } from "./user/user.component";
              
        @Component({
        selector: 'app-root',
        imports: [UserComponent],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

  export class AppComponent {

  // Lecture 43 : Reuse componnet in angular.

  //   other code write in user.ts file and user.html file 

  user = ["rahul" , "raina" , "rinku" , "siraj" , "tilak"]

  }






















  /*  Lecture 42 : Pass Data Parent to Child Component in Angular.

  import { Component, computed, effect, Input, Signal, signal, WritableSignal } from '@angular/core';
        import { UserComponent } from "./user/user.component";

                              

        @Component({
        selector: 'app-root',
        imports: [UserComponent],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

  // other code writed in user.ts file , user.html file for this lecture

        export class AppComponent {
      
      
          // Lecture 42 : Pass Data Parent to Child Component in Angular.
          
          // dynamic data pass and pass value with drop down  in parent  to child component

          userName = "axay kumar"

          changeUser(userName : string){
            this.userName = userName
          }

          city = "surat"
          changeCity (city : string){
            this.city = city
          }    
          }

        */





          





















        
  /*   Lecture 41 : Template Driven Form Validation in Angular
  // this below line for the template driven form form 
        import {FormsModule, NgForm} from '@angular/forms';

        import {NgIf} from '@angular/common';
      
          @Component({
        selector: 'app-root',
        imports: [FormsModule , NgIf],

        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

        export class AppComponent {
          // Lecture 41 : Template Driven Form  Validation in Angular.


          userData : any
          addDetails(val : NgForm){
            console.log(val);
            console.log(this.userData= val);
          }

          }
        
      
























    /* ---  Lecture 40 : Template Driven Form in Angular.-----
    //   this below line for the template driven form form 
    import {FormsModule, NgForm} from '@angular/forms';
    @Component({
        selector: 'app-root',
        imports: [FormsModule ],

        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

        export class AppComponent {
          // Lecture 40 : Template Driven Form in Angular.


          userData : any
          addDetails(val : NgForm){
            console.log(val);
            console.log(this.userData= val);
          }
          }
    */
















    /*       Lecture 39 : Reactive form Validation in Angular.
    import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';


    // this below line for the reactive form 
    import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

    import { NgIf } from '@angular/common';

    @Component({
        selector: 'app-root',
        imports: [ReactiveFormsModule , NgIf ],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

        export class AppComponent {
          
            // Lecture 39 : Reactive form Validation in Angular.

            profileForm = new FormGroup({
              name : new FormControl('' , [Validators.required]),

              password : new FormControl('' , [Validators.required , Validators.minLength(5)]),

              email : new FormControl('' , [Validators.required , Validators.maxLength(30) , Validators.pattern ('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
            })

            onSubmit(){
              // this below line code for the get value in console
              console.log(this.profileForm.value);
            }


            ///  aa badha niche che te getter che
            get name(){
            return this.profileForm.get('name')
            }

            
            get password(){
            return this.profileForm.get('password')
            }

            
            get email(){
            return this.profileForm.get('email')
            }
          }


          //  --------it is only for practise in this lecture reactive form validation ------------------------------------

          /*
            @Component({
        selector: 'app-root',
        imports: [ReactiveFormsModule , NgIf ],

        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

        export class AppComponent {

          userForm = new FormGroup({
            name : new FormControl ('' , [Validators.required]),

            password : new FormControl('' , [Validators.required , Validators.minLength(7)]),

            contact : new FormControl('' , [Validators.required , Validators.maxLength(10)]),
          })

          submit(){
            console.log(this.userForm.value); 
          }

          // this is code for getter


          get name(){
          return this.userForm.get('name')
          }


          get password(){
            return this.userForm.get('password')
          }

          get contact(){
            return this.userForm.get('contact')
          }

          
          }
          */


















































    /*    Lecture 38 : Form Grouping Reactive Form in Angualr. 
    import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';


        // this below line for the reactive form 
        import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

        @Component({
        selector: 'app-root',
        imports: [ReactiveFormsModule],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

        export class AppComponent {
          
            // Lecture 38 : Form Grouping Reactive Form in Angualr.

            profileForm = new FormGroup({
              //name : new FormControl(),
              //password : new FormControl(),
              //email : new FormControl()



              // this code for the default value in form

              name : new FormControl('rahul'),
              password : new FormControl('1878'),
              email : new FormControl('rahul@123test.com')

            })

            onSubmit(){
              // this below line code for the get value in console
              console.log(this.profileForm.value);
            }


            setValue(){
              //this below line code for the set  value in form after click set value button

              this.profileForm.setValue({
                name : 'axar patel',
                password : '7867',
                email : 'axar@bapu.com'
              })
            }
          }

    */



















































    /*  // Lecture 37 : Basic Reactive Form in Angualr.
    import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';


        // this below line for the reactive form 
        import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
        
            @Component({
        selector: 'app-root',
        imports: [ReactiveFormsModule],

        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

        export class AppComponent {
          
            // Lecture 37 : Basic Reactive Form in Angualr.

            name = new FormControl()
            // this below line code for set default name is jay 
          // name = new FormControl('jay');

            password = new FormControl()
            // this below line code for set default password is 111
          //  password = new FormControl('111');

            display(){
              console.log(this.name.value);
              console.log(this.password.value);
            }

            setValue(){
              console.log(this.name.setValue('virat kholi'));
              console.log(this.password.setValue('viru@777'));
              
            }
          }
    */






















    /*   Lecture 36 : Forms in angular   

      // this is a thory lecture so we can not write code of this lecture 

    */
















      /*  Lecture : 35   Dynamic Routing in angular
      
      import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

        import { FormsModule } from '@angular/forms';
                          
        import { ProfileComponent } from './profile/profile.component';
          import { count } from 'rxjs';
      import { animationFrameProvider } from 'rxjs/internal/scheduler/animationFrameProvider';

      import { fakeAsync } from '@angular/core/testing';

        import { queueScheduler } from 'rxjs';
        import {  RouterOutlet } from '@angular/router';
      import { HeaderComponent } from "./header/header.component";

        @Component({
        selector: 'app-root',
        imports: [RouterOutlet , HeaderComponent],

        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

        export class AppComponent {
          
            // Lecture : 35   Dynamic Routing in angular

            // code write in home.ts profile.ts and app.route.ts file

      }








      




















    /*     Lecture : 34  Pass Data form One Page to Another
    import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

    import { FormsModule } from '@angular/forms';
                          
    // import { ProfileComponent } from './profile/profile.component';
    //  import { count } from 'rxjs';
    import { animationFrameProvider } from 'rxjs/internal/scheduler/animationFrameProvider';

    import { fakeAsync } from '@angular/core/testing';

    import { queueScheduler } from 'rxjs';
    import {  RouterOutlet } from '@angular/router';
    import { HeaderComponent } from "./header/header.component";

        @Component({
        selector: 'app-root',
        imports: [RouterOutlet, HeaderComponent],

        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

        export class AppComponent {
          
            // Lecture : 34  Pass Data form One Page to Another

            // code write in home.ts profile.ts and app.route.ts file
            
      }

    */












    /*        Lecture 33 : 404 page in Angular.
      import {  RouterOutlet } from '@angular/router';
        import { HeaderComponent } from "./header/header.component";

        
      
        @Component({
        selector: 'app-root',
        imports: [RouterOutlet, HeaderComponent],

        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

        

        export class AppComponent {
          
            // Lecture 33 : 404 page in Angular.

            // in this lecture we used code of lecture 32 and for this lecture code wrire in page-not-found.html file and app.roues.ts file    

          // code write in login , about , contact ,and app,roues.ts file and header.html and .ts file and home.htmla and ts file 
          
      }
    */







































    /*    Lecture 32 :   Header with Routing in 
    import {  RouterOutlet } from '@angular/router';
        import { HeaderComponent } from "./header/header.component";

        
      
        @Component({
        selector: 'app-root',
        imports: [RouterOutlet, HeaderComponent],

        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

        export class AppComponent {
          
          //     Lecture 32 :   Header with Routing in Angular.  
        // code write in login , about , contact ,and app,roues.ts file and header.html and .ts file and home.htmla and ts file 
          
      }
    */





















      /*            Lecture 31 :   Basic Routing in Angular.  
      import { RouterLink, RouterOutlet } from '@angular/router';

        
      
        @Component({
        selector: 'app-root',
        imports: [ RouterLink , RouterOutlet],

        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

        export class AppComponent {
          
          //        Lecture 31 :   Basic Routing in Angular.  

          
      }








































    /*      Lecture 30 : ngSwitch Directive in Angular
    import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
      
        @Component({
        selector: 'app-root',
        imports: [ NgSwitch , NgSwitchCase , NgSwitchDefault],

        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

        export class AppComponent {
          

          // Lecture 30 : ngSwitch Directive in Angular
          
          color = "tomato"

          changeColor(color : string){
            this.color = color
          }
      }




































      

    /*    Lecture 29 : ngIf Directives in Angular
    import { NgFor, NgIf } from '@angular/common';
      
        @Component({
        selector: 'app-root',
        imports: [NgFor, NgIf],

        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

        export class AppComponent {
          //  Lecture 29 : ngIf Directives in Angular
        
          ------  it is a simple example of ngIf  ----
          //      show = true;


          ----  example of  ngIf used in condition   ----
        // login = false;
          login = true 
          


            example of ngIf directive in multiple condition  

          val = 0;

          updateValue(){
            this.val++
          }
      }
    */
















    /*          Lecture 28 : ngFOr Directives in Angular 
      export class AppComponent {
          
        // Lecture 28 : ngFOr Directives in Angular 
          
        //   example of ngFor with array    
          players = ["virat" , "rohit" , "shivam" , "hardik" , "axar" , "bumrah"];


          //   example of ngFor with array of object
    playersData = [
          {
            name : "virat",
            age : 37,
            city : "delhi"
          },

          {
            name : "rohit",
            age : 38,
            city : "bombay"
          },

          {
            name : "shivam",
            age : 32,
            city : "mumbai"
          },

          {
            name : "hardik",
            age : 32,
            city : "surat"
          },

          {
            name : "axar",
            age : 32,
            city : "anand"
          },

          {
            name : "bumrah",
            age : 32,
            city : "ahemdabad"
          }
        ];
      }

      // nested loop in angular

        data = [
          {
            name : "jay",
            subject : ["maths" , "science" , "history"],
          },

          {
            name : "shivam",
            subject : ["physics" , "computer" , "biology"],
          },

          {
            name : "neel",
            subject : ["economics" , "account" , "english"],
          }
        ];
    */


        































        /*      Lecture 27 : Directives in Angulrar   
          import { NgIf } from '@angular/common';

        @Component({
        selector: 'app-root',
        imports: [ NgIf],

        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })  

        export class AppComponent {
          
          //   Lecture 27 : Directives in Angulrar   
          
          show = false;
          
          
        }

















































      /*          Lecture :  26  DYNAMIC STYLE IN ANGULAR   
        export class AppComponent {
          
          //  Lecture :  26  DYNAMIC STYLE IN ANGULAR

          bgCOlor = "lightgreen"
          fonts = "50px"



          // Dynamic Style with Condition

          bigFonts = "80px"
          smallFOnts = "30px"

          zoom = false;



          // Dynamic Style with button

          mybigFonts = "100px"
          mysmallFOnt = "40px"

          effect = true;

          updateButton(){
            this.effect = !this.effect
          }

        }
      */















      /*         Lecture 25  : TO DO LIST


        export class AppComponent {
          
          //Lecture 25  : TO DO LIST

          task = ""

          taskList :{id : number, task : string} [] = []

          addTask(){

            this.taskList.push({id: this.taskList.length + 1 , task : this.task})

            console.log(this.taskList);
            
            this.task  = ""
          }

          deleteTask(taskId : number){
          this.taskList =  this.taskList.filter ((item) => item.id!= taskId)
          }

        }
      */














































      /*        Lecture 24  : TWO WAY BINDING -->



        import { FormsModule } from '@angular/forms';
        @Component({
        selector: 'app-root',
        imports: [FormsModule],

        templateUrl: './app.component.html',
        styleUrl: './app.component.css' 
        })
        export class AppComponent {

      // this is a two way binding with ngmodel
        name = ""   


        //   this is a second way for two way binding without ngmodel
      /*
        myname = ""

        updateName(event : Event){
          const val = (event.target as HTMLInputElement).value
          this.myname = val 
        }
      //

        }
      */





























        /*       Lecture 23 :   FOR LOOP CONTEXTUAL VARIABLES  

        export class AppComponent {

          // Lecture 23 :   FOR LOOP CONTEXTUAL VARIABLES  

          // this line for the $index , $first , $last , $odd , $even in for loop 
          users = ["virat" , "dhoni" ,"rahul" , "hardik" , "rohit" , "sachin" , "tilak" , "kishan" , "axar" , "bumrah" ]

          // this line for only empty block
          // users = [];
        }

        */












        /*      Lecture 22 : Effect in Angular  
        export class AppComponent {

          //Lecture 22 : Effect in Angular 

        // it is a simple example of effect 
          username = signal("virat kholi");

          constructor(){
            effect(()=> {
              console.log(this.username());   
              
            })
          }
        */


          // this is a another example of effect in angular.
        /*
        userName = signal('dhoni');
        count = signal(0);
        dispalyHeading = true

        constructor(){
          effect(()=> {
            if(this.count() == 3){
              this.dispalyHeading = true

        //  this code for the set timeout of heading

              setTimeout(() => {
                this.dispalyHeading = false
              } , 3000)
          
            }
            else{
              this.dispalyHeading = false
            }
            
          })
        }

        toggleValue(){  
          this.count.set(this.count() + 1)
        }
        }
        */


              



































        /*     lecture 21 : Compued Signal in Angualr

            export class AppComponent {

        //   lecture 21 :  Compued Signal in Angual
        //   here we are used property in this example not using computed signal   

              x = 20;
              y = 10;

              z = this.x + this.y;
              showVal(){
                console.log(this.z);
                
                this.x = 100
                this.z = this.x + this.y;
                console.log(this.z);
              }
        --------


        // here in this example we used computed signal   

        a = signal(50);
        b=  signal(20);
        c = computed(()=> this.a() + this.b())

        showval(){
          console.log(this.c());
          this.a.set(100)
          console.log(this.c());
          
          //console.log(this.c.set());   // here this line can not execute because c is computed signal or read only signal so we can not ;change this signal forcefully
        }

        updateA(){
          this.a.set(500)
        }

        }
        */






























            /*     lecture 20 :      datatype in signal in angular
            export class AppComponent {

            // this is datatype in signal in angular

            /*This example is Define Datatype for value of signal
            //means signale ne value na datatype mate che

            data = signal <number | string>(21);

            updateSignal(){
            */


            // Define Datype for Signal 
            //this line for Define Datype for Signal 
            /*data1 : WritableSignal <number | string> = signal(50)
            updateSignal1(){
              this.data1.set("virat kholi")
            }
            */




            /* this line for Define Datype for Both Signal and Signal’s Value


            data1 : WritableSignal <number | string> = signal(50);

            updateSignal1(){
              this.data1.set("virat kholi")
            }
            */




            /* this is computed type signal and it is read only 

            count : Signal <number> = computed (() => 70)
            */


            /*     here we used update method in signal

            data2 : WritableSignal <number> = signal <number>(95)

            updateData2(){
              this.data2.update( (val) => val + 1)
            }



            }   

            */

















            /*
                          //   Signal in Angular    
                            export class AppComponent {
                              
                              //   Signal in Angular

                            // it is simple example of property and signal      
                              /*count = signal(21);
                                x = 152;
            /////
                              


            // in  this example we see that diffrence between a signal and property 

                                count = signal (100);

                                y = 50; 

            //  we are comment this constructor code because consrtructor is used in only one time 
            /*
                              constructor(){
                                  effect(() => {
                                    //console.log(this.y);    // this line for the propety 


                                    console.log(this.count());  // this line for the signal

                                  })
                                }
                                  /////

                                updateval(){ 
                                //  this.y = 200;

                                  this.count.set(450);

                                // this line for increment 1 in signal
                                //this.count.set(this.count() + 1);


                                // this line for increment 1 in y property
                                //this.y = this.y + 1
                                }

            //



            // this code for the counter app using signal concept in angular

                                count1 = signal(50);

                              constructor(){
                                effect(() => {
                                  console.log(this.count1());
                                  
                              })
                              }


            //     counter app code 1  :

                    // this code required when counter app code 1 is write 
                                /*counterVal(val : string){
                                  if(val == "inc"){
                                    this.count1.set(this.count1() + 1)
                                  }
                                  else{
                                    this.count1.set(this.count1() - 1)
                                  }
                                }
                        }
            */
                            

























            /*   this typescript code is forloop in angualr
                            export class AppComponent {
                              //This is for loop in angular

                              users = ["Virat" , "Rohit" ,
                                "Hardik" , "Varun" , "Axar" 
                              ]

                              // it is object 

                              students = [
                                {
                                  name : "viart Kholi",
                                  age : 37,
                                  city : "Delhi"
                                },
                              
                                {
                                  name : "Rohit Sharma",
                                  age : 38,
                                  city : "Bombay"
                                },
                              
                                {
                                  name : "Hardik PAndya",
                                  age : 31,
                                  city : "Surat"
                                },

                                {
                                  name : "Varun Chakravarti",
                                  age : 34,
                                  city : "Kolkata"
                                },

                                {
                                  name : "Axar Patel",
                                  age : 32,
                                  city : "Nadiyad"
                                },
                              ]

                              getName (name : string){
                                console.log(name);
                                
                              }

                            }

            */





















                            /*   This typescript code for the swich statmnet in angular.
                              export class AppComponent {

                              // this is swich statment concept in angular.

                              color = "red";


                              updateColor(val : string){
                                this.color = val
                              }

                              changeinput(event : Event){
                                this.color = (event.target as HTMLInputElement).value
                              }
                            }

                            */




                            



                  /*

                  // this typescript code for else-if in angular.
                              export class AppComponent {

                              //this is else - if concept in angular
                              color = 15;

                              handleCOlor(val : number){
                                this.color = val
                              }

                              handleInput(event : Event){
                                this.color = parseInt((event.target as HTMLInputElement).value)
                              }
                            }
                  */








                      /*     HERE  IF / ELSE AND CONTROL CONCEPT IN ANGULAR  typescript code : 

                      
                      export class AppComponent {
                          
                          // HERE  IF / ELSE AND CONTROL CONCEPT IN ANGULAR 

                            display = true;

                            x = 25;

                            hide(){
                              this.display = false;
                            }

                            show(){
                                this.display = true;
                              }
                            
                              toggle(){
                                this.display = !this.display
                              }

                              // this for another eaxmple of toogle div

                              togglediv = true;

                              toggle2(){
                                this.togglediv = ! this.togglediv
                              }


                              // this code for the update button text with toggle 

                              update = true;

                              updatetoggle(){
                                this.update = ! this.update;
                              }
                      }

                    */
                      
                








                    /*

                    // this typescript code for understand Get and Set input field value in angular.


                    export class AppComponent {
                            
                            // this typescript code for understand Get and Set input field value in angular.

                    // this example of get value 
                            name = ""
                            displayName = ""
                            getName(event : Event){
                              // first  way is you can use this line for get the user name 

                              this.name = (event.target as HTMLInputElement).value;
                                
                            
                              /* second way you can also get the value of user using this line 

                              name = ""
                            getName(event : Event){
                              const val = (event.target as HTMLInputElement).value;
                              this.name = val; 
                          }
                            //
                            }
                            
                            showName(){
                            this.displayName = this.name
                            }

                            setName(){
                              this.name = "virat";
                            }

                            // this code for the template refrence variable
                            email = ""
                            getemail(val : string){
                              console.log(val);
                              this.email = val
                            }

                            setemail(){
                              this.email = "test@123.com";
                            }

                          }

                    */









                          /* this typescript code for the understand concept of events in angular
                            export class AppComponent {

                          // this for the event concept in angular

                          /*eventcalling(event : MouseEvent){

                          // console.log("function called",event.type);  // check the event type

                          //console.log("function called",event.target.name); // give the name of the class

                          //console.log("it is function",(event.target as Element).classList);// give the classlist

                          //  console.log("my function",(event.target as Element).className);// give the class 

                          // this ts code for the  first div 
                          console.log("it is div element",event.type);  // check the type
                          }

                          // this code for the second div
                          checkEvent(event : any){ 
                            console.log("it is another div element",event.type);
                          }

                          // this code for the input event
                          otherEvent(event : Event){
                          console.log("it is event",event.type);
                          // console.log("it is ",event.type);
                            
                          console.log("value is",(event.target as HTMLInputElement).value);
                            

                          }
                            










/*   this typescript code is for the the counter app in angular 
export class AppComponent {
count = 0;

// another option for the logic we can use three function for the three logic
Increment(){
this.count = this.count + 1;
}

Decrement(){
this.count = this.count - 1;
}

Reset(){
this.count = this.count = 0;
}

----------------------------------------------


// we can also use above three function in single one function like this 

counter(val : string){
if(val == "plus"){
this.count = this.count + 1;
}
else if(val == "minus"){
this.count = this.count - 1; 
}
else{
this.count = 0; 
    } 
   }
  }   
}
*/


                                  
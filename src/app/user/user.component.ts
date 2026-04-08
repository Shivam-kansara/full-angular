
import { Component, Output , OnInit, Input} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user',
  imports:[], 
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  
})
export class UserComponent  {

}
 












































/* Lecture 47 : Component Life Cycle Method in Angular 

import { Component, Output , OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  imports:[UserComponent], 
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  
})

export class UserComponent  {

// Lecture 47 : Component Life Cycle Method in Angular 

//---- we used in this example app.html and app.ts file
 @Input() counter = 0
  
name = "jay"

/*
constructor(){
  console.log("hello");
  this.name = "vivek"
}
  */


// initalize our component
/*
  ngOnInit(){
    this.name = "virat"
    console.log(this.name);
  }
  */


// destroy the component
/*
  ngOnDestroy(){
    console.log("component is desreoyed");
  }
*/
    

// onchange component
/*
 @Input() counter = 0

  ngOnChanges(){
    console.log("ngOnChange called");
    
  }
//

  //  this code for the afternextRender and afterRender
// method is write in the app.ts file

} 

*/



















/* 
Lecture 44 : Pass Data child to parent component in angular  

import { Component, Output , OnInit} from '@angular/core';

import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user',
  imports:[UserComponent], 
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  
})
 


export class UserComponent  {

  // so we are created in Image2 : if click the pass data 1 button this data show on display and console.log
  // 
// Lecture 44 : Pass Data child to parent component in angular 
// onther code of this lecture in app.ts file and app.html file


@Output()getUser = new EventEmitter();

user = ["yuvraj" , "aswwin" , "shresanth" , "zaheer" , "aashish"];

/*   this code for normally data pass child to parent component

ngOnInit(){
  this.getUser.emit(this.user);
}*/



// this is for the button click pass data child to parent componenet

/*
ngOnInit(){
// this below line code is used in 1st button 
  this.getUser.emit(this.user);
-------------
loadData(){
  this.getUser.emit(this.user)
}
} 
*/














/* Lecture 43 : Reuse componnet in angular. 
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-user',
  imports:[UserComponent], 
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})



export class UserComponent  {

  // Lecture 43 : Reuse componnet in angular.
  //  other code write in app.ts file and app.html file

  @Input() i : string = ""
}





 
/*  Lecture 42 :Pass Data Parent to Child Component in Angular

 import { Component, Input } from '@angular/core';
 @Component({
  selector: 'app-user',
  imports:[UserComponent], 
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

// Lecture 42 :Pass Data Parent to Child Component in Angular

// for static data pass 

//@Input() user : string = "";



// this code for dynamic data pass and pass value with drop down  in parent  to child component

// this input is called decorator in angular

// for player name 
@Input() userName : string = "";
// for city name

@Input () city : string = "";
}

*/




















 






/* // Lecture : 35   Dynamic Routing in angular 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  imports:[UserComponent],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  // Lecture : 35   Dynamic Routing in angular 
  name : string | null = "";
  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {

    this.route.params.subscribe(params => {
      //console.log(params['id']);
      //console.log(params['name']);
      console.log(params);
      this.name = params['name'];
    });

  }

}
*/


  

 
 



 // 
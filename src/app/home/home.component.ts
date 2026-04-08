import { ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

// <!-- Lecture 32 :   Header with Routing in Angular.   -->

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



// <!--   Lecture : 34  Pass Data form One Page to Another  -->

//it is a data pass with  button xample
/*

constructor(private router :Router){}
gotoprofile(){
this.router.navigate(['profile'] , {queryParams : {name : 'virat kholi'}});
}
*/









// Lecture : 35   Dynamic Routing in angular

/*
users = [
  {
    id : '11',  
    name : 'virat kholi',
    age :  '38',
    city : 'delhi'
  },

  {
    id : '12',  
    name : 'jasprit bumrah',
    age :  '32',
    city : 'ahemdabad'
  },

  {
    id : '13',  
    name : 'hardik pandya',
    age :  '30',
    city : 'surat'
  },

  {
    id : '14',  
    name : 'sachin tenulkar',
    age :  '58',
    city : 'bombay'
  },

  {
    id : '15',  
    name : 'axar patel',
    age :  '32',
    city : 'aanand'
  }

];
}
*/  
}

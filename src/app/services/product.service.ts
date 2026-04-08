import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   // Lecture 50 : REST API call Services in Angular

 // we used this file for API call services in angular

  constructor(private http : HttpClient){}

    myList(){
      const url = "https://dummyjson.com/products";
    return this.http.get(url)
    }
} 


















  /* Lecture 48 : Services in Angular
  import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 // we used this file for API call services in angular
  constructor(){
    
  }

  getproductData (){
    return [
      {name : "a.c" , barnd : "samsung" , price : "35000"},
      {name : "oven" , barnd : "lg" , price : "15000"},
      {name : "laptop" , barnd : "hp" , price : "70000"},
    ]
  }
}
    */





 



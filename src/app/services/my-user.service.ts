
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../interfaces/my-user';
import { log } from 'firebase/firestore/pipelines';


@Injectable({
  providedIn: 'root'
})
export class MyUserService {

 constructor(private http : HttpClient) { 

  }

}

























/* Lecture 57 : Upadate data with PUT API method
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../interfaces/my-user';
import { log } from 'firebase/firestore/pipelines';


@Injectable({
  providedIn: 'root'
})
export class MyUserService {
//Lecture 57 : Upadate data with PUT API method
//in this lecture we used same api whcih is make in our previous lecture and name it is user also we used interface in this lecture 
 // we used same code and same api which is used in previous lecture and used my-user.ts file for interface and my-user.services.ts file for service

  constructor(private http : HttpClient) { 

  }

  getUser() : Observable<user[]>{
    const url = "http://localhost:3000/users";
    return this.http.get<user[]>(url);
  }

// for POST API
  saveUsers(user : user) : Observable<user>{
const url = "http://localhost:3000/users";
return this.http.post<user>(url,user)
  }


  // for Delete API
  deleteuser(id : string) : Observable<user>{
    const url = "http://localhost:3000/users";
    return this.http.delete<user>(url + "/" + id)
  }


  // for populate API

  updateUser(id : string) : Observable<user>{
   const url = "http://localhost:3000/users";
   return this.http.get<user>(url + "/" + id)
  }


  // for put API

  changeUser(user : user) : Observable <user>{
    const url = "http://localhost:3000/users";
    return this.http.put<user>(url + "/" + user.id,user)
  }
}

*/










/* Lecture 56 : Populate Data in input fields with API
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../interfaces/my-user';
import { log } from 'firebase/firestore/pipelines';


@Injectable({
  providedIn: 'root'
})
export class MyUserService {
//Lecture 56 : Populate Data in input fields with API
//in this lecture we used same api whcih is make in our previous lecture and name it is user also we used interface in this lecture 
 // we used same code and same api which is used in previous lecture and used my-user.ts file for interface and my-user.services.ts file for service

  constructor(private http : HttpClient) { 

  }

  getUser() : Observable<user[]>{
    const url = "http://localhost:3000/users";
    return this.http.get<user[]>(url);
  }

// for POST API
  saveUsers(user : user) : Observable<user>{
const url = "http://localhost:3000/users";
return this.http.post<user>(url,user)
  }


  // for Delete API
  deleteuser(id : string) : Observable<user>{
    const url = "http://localhost:3000/users";
    return this.http.delete<user>(url + "/" + id)
  }


  // for populate API

  updateUser(id : string) : Observable<user>{
   const url = "http://localhost:3000/users";
   return this.http.get<user>(url + "/" + id)

  }
}
*/


































/* Lecture 55 : Delete API in angular

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../interfaces/my-user';
import { log } from 'firebase/firestore/pipelines';


@Injectable({
  providedIn: 'root'
})
export class MyUserService {
// Lecture 55 : Delete  API in Angular 
//in this lecture we used same api whcih is make in our previous lecture and name it is user also we used interface in this lecture 
 // we used same code and same api which is used in previous lecture and used my-user.ts file for interface and my-user.services.ts file for service

  constructor(private http : HttpClient) { 

  }

  getUser() : Observable<user[]>{
    const url = "http://localhost:3000/users";
    return this.http.get<user[]>(url);
  }

// for POST API
  saveUsers(user : user) : Observable<user>{
const url = "http://localhost:3000/users";
return this.http.post<user>(url,user)
  }


  // for Delete API
  deleteuser(id : string) : Observable<user>{
    const url = "http://localhost:3000/users";
    return this.http.delete<user>(url + "/" + id)
  }
}

*/























/*  Lecture 54 : POST  API in Angular 


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../interfaces/my-user';
import { log } from 'firebase/firestore/pipelines';


@Injectable({
  providedIn: 'root'
})
export class MyUserService {
// Lecture 54 : POST  API in Angular 
//in this lecture we used same api whcih is make in our previous lecture and name it is user also we used interface in this lecture 
 // we used same code and same api which is used in previous lecture and used my-user.ts file for interface and my-user.services.ts file for service

  constructor(private http : HttpClient) { 

  }

  getUser() : Observable<user[]>{
    const url = "http://localhost:3000/users";
    return this.http.get<user[]>(url);
  }


  saveUsers(user : user) : Observable<user>{
const url = "http://localhost:3000/users";
return this.http.post<user>(url,user)
  }

}
*/


















/* Lecture 53 : Define data type for API result 
in this lecture we used same api whcih is make in our previous lecture and name it is user also we used interface in this lecture and used my-user.ts file for interface and my-user.services.ts file for service

// we used same code and same api which is used in previous lecture 


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../interfaces/my-user';

@Injectable({
  providedIn: 'root'
})
export class MyUserService {
// Lecture 53 : Define data type for API result 
  constructor(private http : HttpClient) { 

  }

  getUser() : Observable<user[]>{
    const url = "http://localhost:3000/users";
    return this.http.get<user[]>(url);
  }
}
*/













































/*  lecture 52 :  Lecture 52 : Integrate JSON Server API

// in this lecture we used same api whcih is make in our previous lecture and name it is user and we used service which is my-user.service.ts file


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyUserService {

  constructor(private http : HttpClient) { 

  }

  getUser(){
    const url = "http://localhost:3000/users";
    return this.http.get(url);
  }
}

*/

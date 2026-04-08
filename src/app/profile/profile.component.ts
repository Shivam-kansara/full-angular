
import { Component  , OnInit} from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";


@Component({
    selector:'app-profile',
    
    /*  if we used the html and css file so we can not write this we can write their url in this file
    template : '<h1>profile Component</h1>',
    styles :'h1{background-color : lightgreen}',  */


    imports : [RouterLink],
    templateUrl : './profile.component.html',
    styleUrl : './profile.component.css'
    //styleUrls : ['./profile.btn.css' , './profile.component.css']
    //styles : ['h1{background-color : hotpink}']
})

export class ProfileComponent  {
   //  Lecture : 34  Pass Data form One Page to Another 
  
   
   // it is a data pass with router  link example    -->
/*
   constructor(private route : ActivatedRoute){}

   userName  : string | null = ""
   ngOnInit(){

/*    it is a data pass with router  link example code 
    this.userName = this.route.snapshot.paramMap.get('name');
    console.log(this.userName); 
   }
-------

// pass data with button click  example 
//
constructor(private route : ActivatedRoute){}

   userName  : string | null = ""
   ngOnInit(){
this.route.queryParamMap.subscribe(params => {
this.userName = params.get ('name');   
})
//

------
// data pass with router example   
constructor(private route : ActivatedRoute){}

   userName  : string | null = ""
   ngOnInit(){
this.route.data.subscribe(data => {
    this.userName = (data['name']);
    
})
}
*/








//     <!-- Lecttuer 35 : Dynamic Routing in angular    --> 



}

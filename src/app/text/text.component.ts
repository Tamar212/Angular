import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mytext: string = "this is test ";
  
  zion:Number=10*10;
 
  myusername:string="";

  ismyusername:boolean=false;
  
  arrq:string[]=["when was holcost","when was firs world"];

  cheaktext():void{
    if(this.zion>70)
    {
      alert(this.myusername +" exelaned");
      
    }
    else
        alert("this zion bad")
        
  }

  
  checkUser():boolean{
    if(this.myusername=="")
        
       return true;
     else
         this.ismyusername=true;
        return false;  
  }
  

  styleObj1:any = { "background-color":this. checkUser? "whight":"blue","font-size.px": 4*5};
  styleObj2:any = { "background-color":this.myusername? "red":"wight",};
   
  


}

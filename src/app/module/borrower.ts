import { logging } from 'protractor';
import { Category } from '../category';

 
export class Borrower {
    constructor(id:number,tz:number,age:number,firstname:string,lastname:string,phonenumber:number,mail:string){
      this.id=id;
      this.tz=tz;
      this.age=age;
      this.firstname=firstname;
      this.lastname=lastname;
      this.phonenumber=phonenumber;
      this.mail=mail;
    }
    id:number;
    tz:number;
    age:number;
    firstname:string;
    lastname:string;
    phonenumber:number;
    mail:string;

}



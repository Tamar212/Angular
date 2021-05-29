
import { logging } from 'protractor';
 
export class lendings {
    constructor(id:number, borrowerId:number, borrowerFirstName:string, borrowerLastName:string, bookId:number, bookTitle:string,landingDate:Date,returnDate:Date){

        this.id=id;
        this.borrowerId=borrowerId;
        this.borrowerFirstName=borrowerFirstName;
        this.borrowerLastName=borrowerLastName;
        this.bookId= bookId;
        this.bookTitle=bookTitle;
        this.landingDate=landingDate;
        this.returnDate=returnDate;
    }
    id:number;
    borrowerId:number;
    borrowerFirstName:string;
    borrowerLastName:string;
    bookId:number;
    bookTitle:string;
    landingDate:Date;
    returnDate:Date;

}
 
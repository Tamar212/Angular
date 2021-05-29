import { Injectable } from '@angular/core';
import { Borrower } from '../module/borrower';

@Injectable({
  providedIn: 'root'
})
export class BorrowerService {

  borrowerList:Borrower[]=[];
  s:Number;
  constructor() { 
    this.borrowerList.push(new Borrower(464531234,75456784,18,'dan','cohen',75643246,'dan@gmail.com'));
    this.borrowerList.push(new Borrower(995425894,46834574,56,'yosef haim ','levi',535743526,'shlomo1@gmail.com'));
    this.borrowerList.push(new Borrower(835805358,23707368,10,'yair','natan',587357945,''));
  }

  getAll():Borrower[]{
    return this.borrowerList; 
  }
  numOfBorrowers():Number{
   
    this.s=this.borrowerList.length;
    return this.s;
  }
}
 
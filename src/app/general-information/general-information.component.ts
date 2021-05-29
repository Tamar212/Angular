import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../module/book';
import { Borrower } from '../module/borrower';
import { BorrowerService } from '../services/borrower.service';
@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

  constructor(private bookService:BookService,private borrowerService:BorrowerService) { }
  cnt:Number;
  numBorrowers:Number;
  bookList:Book[]=null;
  ngOnInit(): void {
    this.bookList=this.bookService.getAll();
    this.cnt=this.bookList.length;
    this.numBorrowers=this.borrowerService.numOfBorrowers();
  }
  getCnt():Number{
    return this.cnt;
  }
  getnum():Number{
    return this.numBorrowers;
  }

}

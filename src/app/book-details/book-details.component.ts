import { Component, OnInit } from '@angular/core';
import { Book } from '../module/book';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  myFontSize: number = 80;
  myFontSize1: number = 35;
  color: string = "red";

  bookDetails: Book[] = [];
  //bookDetails:Book=[];
  bookDetail: Book = null;
  bookbyid: Book = null;
  book_Detail: Book;
  constructor(private book1: BookService, private activatedRoute: ActivatedRoute) { }
  num: number;
  ngOnInit(): void {

    //this.bookDetail = this.bookService.getBook();
    //this.bookDetails = this.bookService.getAll();
    //BookService
    this.bookbyid = this.book1.getBookById(this.num);
    this.activatedRoute.params.subscribe(params => this.book_Detail = this.book1.getBookById(params.id));

    //this.num = params.id);
    //console.log(this.bookbyid);
    // this.bookDetails.push(new Book(465625634,"bambuk","אברהם שוורצבאום","from chane to sinay",18,450));
    // this.bookDetails.push(new Book(4735680,"kurman","hofman mmmm","gdbvgdhsj",10,300)); 

  }

}

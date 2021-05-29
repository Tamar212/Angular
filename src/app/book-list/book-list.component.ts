import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../module/book';
import { NgForOf } from '@angular/common';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl:'./book-list.component.html',
  styleUrls: ['./book-list.component.css']
  
})
export class BookListComponent implements OnInit {
 
  id:number; 

  constructor(private bookService:BookService) { }
  bookList:Book[]=null;
  cntbook:number;
  mame1:string;
  mame:Input;
  text:number;
  onebook:Book[]=null;
  ngOnInit(): void { 
    this.bookList=this.bookService.getAll();
    //this.onebook=this.bookService.getBookById();
    //this.bookbyid = this.bookService.getBookById(this.num);
    this.cntbook=this.bookList.length;
   
  }
  isempty():boolean{
    if(this.cntbook>0){
      return false;
    }
    else{
      return true;
    }
  }
  cnt():number{
    return this.cntbook;
  }

}

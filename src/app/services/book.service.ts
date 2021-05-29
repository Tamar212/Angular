import { Injectable } from '@angular/core';
import { Book } from '../module/book';
import { NgForOf } from '@angular/common';
import { BookListComponent } from '../book-list/book-list.component';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  
  bookList:Book[]=[];
  
 
  constructor() { 
  this.bookList.push(new Book(465625634,"aaa","dan cohen","from chane to sinay",18,450));
  this.bookList.push(new Book(null,"bbb","rut levi","my book",5,23));
  this.bookList.push(new Book(553746678,"ccc","yair man","new book",20,35));
  this.bookList.push(new Book(598761254,"ddd","","the world",55,450));
   

 }

  getAll():Book[]{
    return  this.bookList;    
  }
  getBook():Book{ 
    return this.bookList[0];
  } 
  getBookById(x:number):Book{ 
    for(let i=0;i<this.bookList.length;i++){
        if(this.bookList[i].id==x){
          return this.bookList[i];
        }
    }
    
  }
  
}

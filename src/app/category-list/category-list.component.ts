import { Component, OnInit } from '@angular/core';
import{Category}from '../category'
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  
  constructor(private categoryService:CategoryService) { }
  
  categoryList:Category[]=null;
   

  ngOnInit() {
    this.categoryList=this.categoryService.getAll();
    
      
  }

}

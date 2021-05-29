import { Injectable } from '@angular/core';
import { CategoryListComponent } from '../category-list/category-list.component';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryList: Category[]=[]; 
  constructor() {
  this.categoryList.push(new Category("Babies","0-2","red"));
  this.categoryList.push(new Category("Children","2-12","blue"));
  this.categoryList.push(new Category("Teens","12-18","pink"));
  this.categoryList.push(new Category("Adult","18+","green"));
  
}

  

getAll():Category[]{
  return  this.categoryList;
}   

  


}

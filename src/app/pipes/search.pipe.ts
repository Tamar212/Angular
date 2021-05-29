import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../module/book';
@Pipe({
  name: 'search'
 
})
export class SearchPipe implements PipeTransform {  
  transform(bookList:Book[],value: string,): Book[] {
    var b:Book[]=[];
    for(let i=0;i<bookList.length;i++){
      if(bookList[i].title.indexOf(value)!=-1){  
        b.push(bookList[i]);
      }
    }

return b;
  //   if(value!=null){
  //     for(var i=0;bookList.length;i++){
  //       if(bookList[i].title.indexOf(value)!=-1){  
  //         b.push(bookList[i]);
  //       }
  //     }
  //   }
  //   else{
  //     return bookList;
  //   }    
  //   return b;
  // }
  }
}

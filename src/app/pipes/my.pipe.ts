import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'my' 

})

export class MyPipe implements PipeTransform {
  
  transform(value: string,args?: any): string {    
   for(var i=0;i<value.length;i++){
      if(value.charAt(i)==' '){
         return value.substring(0,i)+"."+value.charAt(i+1);
       }   
    }   
   return value;
  }
}
  

 
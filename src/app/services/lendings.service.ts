import { Injectable } from '@angular/core';
import { lendings } from '../module/lendings';
 
@Injectable({
  providedIn: 'root'
})
export class LendingsService {

  lendings:lendings[]=[];
 
  constructor() { 
    this.lendings.push(new lendings(null,1312,'aaaa','x',675,'tt',new Date(2000,2,3),null));
    this.lendings.push(new lendings(3456732,2579,'bbbb','y',352,'kk',new Date(2003,9,3),new Date(2016,9,7)));
    this.lendings.push(new lendings(1324142,6244,'cccc','z',244,'ff',new Date(2012,11,4),new Date(2016,9,7)));
    this.lendings.push(new lendings(2684695,9135,'dddd','w',987,'ll',new Date(1990,6,9),new Date(2020,4,7)));
  }

  getAll():lendings[]{
    return this.lendings; 
  }

  getOne():lendings{
    return this.lendings[0]; 
  }
  
  isReturned(lendings:lendings):boolean{
  return lendings.returnDate==null&&(Date.now()-lendings.landingDate.getTime())>30*24*60*1000;
  }
  
   
}


 
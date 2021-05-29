import { Component, OnInit } from '@angular/core';
import { lendings } from '../module/lendings';
import { LendingsService } from '../services/lendings.service';
import { checkServerIdentity } from 'tls';

@Component({
  selector: 'app-lendings',
  templateUrl: './lendings.component.html',
  styleUrls: ['./lendings.component.css']
})
export class LendingsComponent implements OnInit {

  constructor(private lendingsService:LendingsService) { }

  lends:lendings[]=null;
  lend:lendings=null;
  
  ngOnInit(): void {
    this.lend=this.lendingsService.getOne();
    this.lends=this.lendingsService.getAll();
    
  }
  
isReturned(lendings:lendings):boolean{
return this.lendingsService.isReturned(lendings);
}
 
 
}

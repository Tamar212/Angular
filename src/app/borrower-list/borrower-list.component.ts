import { Component, OnInit } from '@angular/core';
import { Borrower } from '../module/borrower';
import { getMaxListeners } from 'process';
import { Category } from '../category';
import { BorrowerService} from '../services/borrower.service';
//import { Borrower } from '../borrower';


@Component({
  selector: 'app-borrower-list',
  templateUrl:'./borrower-list.component.html',
  styleUrls: ['./borrower-list.component.css']
})
export class BorrowerLIstComponent implements OnInit {
 
  constructor(private borrowerService:BorrowerService) { }

  hasalldetails:Borrower[]=null; 

  ngOnInit():void {

    this.hasalldetails=this.borrowerService.getAll();
   
  }

}

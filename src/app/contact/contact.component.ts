import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router/*, private route: ActivatedRoute*/) {}
  /*go() {
    this.router.navigate(['../contact'], { relativeTo: this.route });
    }*/
  ngOnInit(): void {
  }
  
}
 

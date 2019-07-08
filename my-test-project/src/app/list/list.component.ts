import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListService } from './list.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService, public router: Router) {
    this.items.valueChanges.subscribe( value => this.a = value);
   }
  ngOnInit() {
    
  }
 
  items = new FormControl(null);
  p: number = 1;
  a: number = 4;

  
  residences = this.listService.residences;
  
}

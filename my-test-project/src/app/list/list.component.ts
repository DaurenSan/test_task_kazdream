import { Component, OnInit } from '@angular/core';
import {RESIDENCES} from '../mock-data';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  items = new FormControl(4);
  p: number = 1;
  a: number = this.items.value;
  residences = RESIDENCES;
  

}

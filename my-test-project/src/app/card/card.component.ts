import { Component, Input, OnInit } from '@angular/core';
import {Residence} from '../residence';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() residence: Residence;

  constructor() { }
  
  
  ngOnInit() {
    
  }

}

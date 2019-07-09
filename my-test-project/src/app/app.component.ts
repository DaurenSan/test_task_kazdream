import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from './list/list.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public router: Router, private listService: ListService) {}
  ngOnInit() {
    
  }
  deleteSelected(){
    this.listService.temporaryArray.forEach(x => this.listService.residences = this.listService.residences.filter(y => y.id != x.id))
    console.log(this.listService.residences)
    
  }
 
}

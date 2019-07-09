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

  isSingleClick: Boolean = true; 
 
  items = new FormControl(null);
  p: number = 1;
  a: number = 4;

  chooseCard(object){
    this.isSingleClick = true;
        setTimeout(()=>{
            if(this.isSingleClick){
              console.log(object);
              if(object.chosen === false){
                this.listService.residences.find(x => x.id == object.id).chosen = true;
                this.listService.temporaryArray.push(object);
              }else{
                this.listService.residences.find(x => x.id == object.id).chosen = false;
                this.listService.temporaryArray = this.listService.temporaryArray.filter(x => x.id != object.id);
               }
              console.log(object);
              console.log(this.listService.temporaryArray);
            }
         },250)
    
  }
  
  updateCard(object){
    this.isSingleClick = false;
    this.router.navigate(['/update/'+object.id.toString()]);
    this.listService.cardToUpdate = object;
    console.log(this.listService.cardToUpdate);
}


}

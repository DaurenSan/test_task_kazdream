import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ListService } from '../list/list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private listService: ListService, public router: Router) { }


  ngOnInit() {
    
  }
  updateForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    photo: new FormControl(null)
  });
 
  onSubmit() {
    this.updateForm.value.photo = 'assets/venskiy.jpg';
    let name = this.updateForm.value.name;
    let description = this.updateForm.value.description;
    this.listService.residences.find(x => x.id == this.listService.cardToUpdate.id).name = name;
    this.listService.residences.find(x => x.id == this.listService.cardToUpdate.id).description = description;
    console.log(this.listService.residences);
    this.router.navigate(['/list']);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ListService } from '../list/list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private listService: ListService, public router: Router) { }

  ngOnInit() {
  }
  createForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    photo: new FormControl(null)
  });
  onSubmit() {
    this.createForm.value.photo = this.createForm.value.photo.replace('D:\test_task_kazdream\my-test-project\src\assets', 'assets/');
    this.listService.residences.push(this.createForm.value);
    this.router.navigate(['/list']);
  }
}

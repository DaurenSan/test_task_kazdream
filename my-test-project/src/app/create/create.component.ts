import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  createForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    photo: new FormControl(null)
  });
  onSubmit() {
    console.warn(this.createForm.value);
  }
}

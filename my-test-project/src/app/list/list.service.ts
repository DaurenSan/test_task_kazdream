import { Injectable } from '@angular/core';
import {RESIDENCES} from '../mock-data';
import {Residence} from '../residence';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  constructor() { }
  
  residences = RESIDENCES;
  temporaryArray = [];
}

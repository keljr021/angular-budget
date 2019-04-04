import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-build-table',
  templateUrl: './build-table.component.html',
  styleUrls: ['./build-table.component.sass']
})
export class BuildTableComponent implements OnInit {

  caption:string;
  headers:string[];
  
  data:string[];

  addAverage:boolean;
  addTotal:boolean;
  styles:string;

  constructor() {
    this.addAverage = false;
    this.addTotal = false;
  }

  ngOnInit() { 
    
  }

}

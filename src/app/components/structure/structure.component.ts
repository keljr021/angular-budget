import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: [
    './../../layout/build-table/build-table.component.sass', 
    './structure.component.sass'
  ]
})
export class StructureComponent implements OnInit {

  startDate:string;
  endDate:string;
  columns:string;

  constructor() { }

  ngOnInit() {
  }

  storeStartDate(value:string) {
    console.log('start date:', value);
    this.startDate = value;
  }

  storeEndDate(value: string) {
    console.log('end date:', value);
    this.endDate = value;
  }  

}

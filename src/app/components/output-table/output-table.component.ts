import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-table',
  templateUrl: './output-table.component.html',
  styleUrls: ['./output-table.component.sass']
})
export class OutputTableComponent implements OnInit {

  addAverage: boolean;
  addTotal: boolean;
  caption: string;
  headers: string[];
  rows: object[];
  
  
  constructor() {
    this.addAverage = false;
    this.addTotal = false;
    this.caption = 'Table Caption';
    this.headers = ['Column X', 'Column Y', 'Column Z'];
    this.rows = [
      {
        name: 'Row 1',
        values: [0, 0, 0]
      },
      {
        name: 'Row 2',
        values: [0, 0, 0]
      }
    ];
   }

  ngOnInit() {
  }

}

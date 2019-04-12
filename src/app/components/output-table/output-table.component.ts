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
  headerArray: string[];
  cellArray: string[][];
  
  
  constructor() {
    this.addAverage = false;
    this.addTotal = false;
    this.caption = 'Table Caption YOLO';
    this.headerArray = [null, 'Col 1', 'Col 2', 'Col 3'];
    this.cellArray = [
      ['main', '0', '0', '0'],
      ['main', '0', '0', '0']
    ];
   }

  ngOnInit() {
  }

}

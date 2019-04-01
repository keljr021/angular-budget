import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-table',
  templateUrl: './build-table.component.html',
  styleUrls: ['./build-table.component.sass']
})
export class BuildTableComponent implements OnInit {

  steps:string[];
  stepIdx:number;

  caption:string;
  headers:string[];
  
  data:string[];

  addAverage:boolean;
  addTotal:boolean;
  styles:string;

  constructor() {
    this.steps = ['structure', 'values', 'styles', 'download'];
    this.stepIdx = 0;
    this.addAverage = false;
    this.addTotal = false;
  }

  ngOnInit() { 
    
  }

  getStep(steps:string[], stepIdx:number) {
    let activeStep = this.steps[this.stepIdx];
    return activeStep;
  }

  nextStep() {
    this.stepIdx = this.stepIdx + 1;
  }

  prevStep() {
    this.stepIdx = this.stepIdx - 1;
  }

}

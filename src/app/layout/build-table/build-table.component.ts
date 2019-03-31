import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-table',
  templateUrl: './build-table.component.html',
  styleUrls: ['./build-table.component.sass']
})
export class BuildTableComponent implements OnInit {

  steps:string[] = ['structure', 'values', 'styles', 'download'];
  stepIdx:number = 0;

  constructor() { }

  ngOnInit() { 
    
  }

  getStep(steps:string[], stepIdx:number) {
    let activeStep = this.steps[this.stepIdx];
    console.log(activeStep);
    return activeStep;
  }

  nextStep() {
    this.stepIdx = this.stepIdx + 1;
  }

  prevStep() {
    this.stepIdx = this.stepIdx - 1;
  }

}

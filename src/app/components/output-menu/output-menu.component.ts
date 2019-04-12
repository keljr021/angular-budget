import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-menu',
  templateUrl: './output-menu.component.html',
  styleUrls: ['./output-menu.component.sass']
})
export class OutputMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showMenu() {
    console.log('show menu');
  }

  hideMenu() {
    console.log('hide menu');
  }

}

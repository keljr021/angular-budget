import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputMenuComponent } from './output-menu.component';

describe('OutputMenuComponent', () => {
  let component: OutputMenuComponent;
  let fixture: ComponentFixture<OutputMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

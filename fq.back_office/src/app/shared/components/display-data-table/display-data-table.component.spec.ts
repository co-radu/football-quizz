import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDataTableComponent } from './display-data-table.component';

describe('DisplayDataTableComponent', () => {
  let component: DisplayDataTableComponent;
  let fixture: ComponentFixture<DisplayDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

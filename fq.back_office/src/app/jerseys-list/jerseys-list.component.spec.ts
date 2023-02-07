import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JerseysListComponent } from './jerseys-list.component';

describe('JerseysListComponent', () => {
  let component: JerseysListComponent;
  let fixture: ComponentFixture<JerseysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JerseysListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JerseysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JerseysFormComponent } from './jerseys-form.component';

describe('JerseysFormComponent', () => {
  let component: JerseysFormComponent;
  let fixture: ComponentFixture<JerseysFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JerseysFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JerseysFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

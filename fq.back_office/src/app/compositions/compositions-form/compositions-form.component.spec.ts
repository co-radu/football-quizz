import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionsFormComponent } from './compositions-form.component';

describe('CompositionsFormComponent', () => {
  let component: CompositionsFormComponent;
  let fixture: ComponentFixture<CompositionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompositionsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompositionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

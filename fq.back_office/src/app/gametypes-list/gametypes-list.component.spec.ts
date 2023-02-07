import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GametypesListComponent } from './gametypes-list.component';

describe('GametypesListComponent', () => {
  let component: GametypesListComponent;
  let fixture: ComponentFixture<GametypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GametypesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GametypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

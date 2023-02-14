import { TestBed } from '@angular/core/testing';

import { JerseysService } from './jerseys.service';

describe('JerseysService', () => {
  let service: JerseysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JerseysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

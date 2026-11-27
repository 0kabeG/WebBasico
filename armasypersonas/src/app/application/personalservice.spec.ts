import { TestBed } from '@angular/core/testing';
import { Personalservice } from './personalservice';

describe('Personalservice', () => {
  let service: Personalservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Personalservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

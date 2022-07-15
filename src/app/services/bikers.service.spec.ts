import { TestBed } from '@angular/core/testing';
import { BikersService } from './bikers.service';

describe('BikersService', () => {
  let service: BikersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

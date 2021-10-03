import { TestBed, inject } from '@angular/core/testing';

import { SchtroumpfService } from './schtroumpf.service';

describe('SchtroumpfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchtroumpfService]
    });
  });

  it('should be created', inject([SchtroumpfService], (service: SchtroumpfService) => {
    expect(service).toBeTruthy();
  }));
});

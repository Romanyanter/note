import { TestBed } from '@angular/core/testing';

import { NotsService } from './nots.service';

describe('NotsService', () => {
  let service: NotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PlainService } from './plain.service';

describe('PlainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlainService = TestBed.get(PlainService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { JSONplaceholderService } from './jsonplaceholder.service';

describe('JSONplaceholderService', () => {
  let service: JSONplaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSONplaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

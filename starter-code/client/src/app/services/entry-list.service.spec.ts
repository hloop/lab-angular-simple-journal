import { TestBed, inject } from '@angular/core/testing';

import { EntryListService } from './entry-list.service';

describe('EntryListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntryListService]
    });
  });

  it('should be created', inject([EntryListService], (service: EntryListService) => {
    expect(service).toBeTruthy();
  }));
});

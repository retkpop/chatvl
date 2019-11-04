import { TestBed } from '@angular/core/testing';

import { PageSiteService } from './page-site.service';

describe('PageSiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageSiteService = TestBed.get(PageSiteService);
    expect(service).toBeTruthy();
  });
});

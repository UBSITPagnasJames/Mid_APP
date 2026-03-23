import { TestBed } from '@angular/core/testing';

import { SupplierServices } from './supplier-services';

describe('SupplierServices', () => {
  let service: SupplierServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

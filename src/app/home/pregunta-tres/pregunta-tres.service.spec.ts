import { TestBed } from '@angular/core/testing';

import { PreguntaTresService } from './pregunta-tres.service';

describe('PreguntaTresService', () => {
  let service: PreguntaTresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreguntaTresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

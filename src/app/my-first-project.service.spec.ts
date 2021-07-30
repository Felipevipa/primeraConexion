import { TestBed } from '@angular/core/testing';

import { MyFirstProjectService } from './my-first-project.service';

describe('MyFirstProjectService', () => {
  let service: MyFirstProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFirstProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

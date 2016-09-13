/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ReverseFilterPipe } from './reverse-filter.pipe';

describe('Pipe: ReverseFilter', () => {
  it('create an instance', () => {
    let pipe = new ReverseFilterPipe();
    expect(pipe).toBeTruthy();
  });
});

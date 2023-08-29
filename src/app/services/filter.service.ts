import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filters } from './types';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filtersSubject = new BehaviorSubject<Filters>({
    filterState: false,
    minPrice: 0,
    maxPrice: 0,
    name: '',
    sku: '',
    tags: [] as string[],
  });

  filters$ = this.filtersSubject.asObservable();

  constructor() { }

  updateFilters(filters: Filters) {
    this.filtersSubject.next(filters);
  }

  clearFilters() {
    const defaultFilters = {
      filterState: false,
      minPrice: 0,
      maxPrice: 0,
      name: '',
      sku: '',
      tags: [] as string[],
    };
    this.filtersSubject.next(defaultFilters);
  }
}

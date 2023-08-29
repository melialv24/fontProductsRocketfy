import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { FormControl } from '@angular/forms';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  categories: string[] = []
  categoriesSelected = new FormControl('');
  filters = {
    filterState: false,
    minPrice: 0,
    maxPrice: 0,
    name: '',
    sku: '',
    tags: [] as string[]
  };

  constructor(private productService: ProductsService, private filterService: FilterService) { }

  ngOnInit(){
    this.getCategories()
  }

  getCategories() {
    this.productService.getCategories().subscribe({
      next: (response: any) => {
        this.categories = response.data
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  getDataFilter() {
    const selectedCategories = this.categoriesSelected.value!;
    const tagsArray = Array.isArray(selectedCategories) ? selectedCategories : [selectedCategories];

    const filters = {
      filterState: true,
      minPrice: this.filters.minPrice,
      maxPrice: this.filters.maxPrice,
      name: this.filters.name,
      sku: this.filters.sku,
      tags: tagsArray ? tagsArray : [],
    };

    this.filterService.updateFilters(filters);
  }

  cleanFilters() {
      this.filterService.clearFilters();
      this.categoriesSelected.setValue('');
  }

}

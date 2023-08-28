import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductCard } from '../types';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogProductCreateOrEditComponent } from '../dialog-product-create-or-edit/dialog-product-create-or-edit.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent {
  products: ProductCard[] = [];
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

  constructor(public dialog: MatDialog, private productService: ProductsService, private _snackBar: MatSnackBar){
  }


  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }


  getProducts(){
    this.productService.getProducts({ ...this.filters }).subscribe({
      next: (response: any) => {
        this.products = response.data
        this.filters = { ...this.filters, filterState: false }
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  getDataFilter(){
    const selectedCategories = this.categoriesSelected.value!;
    const tagsArray = Array.isArray(selectedCategories) ? selectedCategories : [selectedCategories];
    this.filters = { ...this.filters, filterState: true, tags: tagsArray ? tagsArray : [] };
    this.getProducts()
  }

  cleanFilters(){
    this.filters = {
      filterState: false,
      minPrice: 0,
      maxPrice: 0,
      name: '',
      sku: '',
      tags: [] as string[]
    };
    this.categoriesSelected.setValue('');
    this.getProducts()
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

  createNewProduct(){
      const dialogRef = this.dialog.open(DialogProductCreateOrEditComponent);

      dialogRef.afterClosed().subscribe(result => {
        if (result.flag) {
          this.getProducts()
          this.getCategories()
          this._snackBar.open('Producto creado de manera exitosa', 'close');
        }
      });
  }


}

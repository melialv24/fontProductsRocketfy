import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Filters, ProductCard } from '../../types';
import { ProductsService } from '../../../services/products.service';
import { DialogProductCreateOrEditComponent } from '../../components/dialog-product-create-or-edit/dialog-product-create-or-edit.component';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent {
  products: ProductCard[] = [];
  lowValue: number = 0
  highValue: number = 3
  filters: Filters = {}

  constructor(
    public dialog: MatDialog,
    private productService: ProductsService,
    private _snackBar: MatSnackBar,
    private filterService: FilterService
    ){
  }


  ngOnInit(): void {
    this.getProducts();
    this.filterService.filters$.subscribe((filters) => {
      if (filters && filters.filterState) {
        this.applyFilters(filters);
      }
    });
  }

  applyFilters(filters: any) {
    this.filters = filters
    this.getProducts()
  }


  getProducts(){
    this.productService.getProducts({...this.filters}).subscribe({
      next: (response: any) => {
        this.products = response.data
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
          this._snackBar.open('Producto creado de manera exitosa', 'close');
        }
      });
  }

  resizePaginator(event:any){
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
  }


}

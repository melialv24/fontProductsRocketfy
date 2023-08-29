import { Component, RendererStyleFlags2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductDetailCard } from '../../types';
import { ProductsService } from '../../../services/products.service';
import { DialogProductCreateOrEditComponent } from '../../components/dialog-product-create-or-edit/dialog-product-create-or-edit.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  productId: string = ''
  product: ProductDetailCard = {}

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') || '';
    this.getProduct()

  }

  getProduct(){
    this.productService.getProductById(this.productId).subscribe({
      next: (response: any) => {
        this.product = response.data
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  redirectToProducts(){
    this.router.navigate(['/products']);
  }

  handleOpenEditor() {
    const dialogRef = this.dialog.open(DialogProductCreateOrEditComponent, {
      data: { product: this.product },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.flag){
        this.getProduct()
        this._snackBar.open('Producto actualizado de manera exitosa', 'close');
      }
    });
  }

  handleDeleteProduct() {
    this.productService.deleteProduct(this.productId).subscribe({
      next: (response: any) => {
        if (response.flag){
          this.router.navigate(['/']);
          this._snackBar.open('Producto eliminado de manera exitosa', 'close');
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }







}

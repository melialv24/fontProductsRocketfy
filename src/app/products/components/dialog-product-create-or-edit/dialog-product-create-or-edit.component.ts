import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { ProductDetailCard, ReceiveDetailsData } from '../../types';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-product-create-or-edit',
  templateUrl: './dialog-product-create-or-edit.component.html',
  styleUrls: ['./dialog-product-create-or-edit.component.css']
})
export class DialogProductCreateOrEditComponent {

  categories: string[] = []
  newCategory: string = ''
  categoriesSelected = new FormControl();
  stateEdit: boolean = false
  productId: string = ''
  product: ProductDetailCard = {
    description: '',
    urlImage: '',
    price: 0,
    stock: 0,
    name: '',
    sku: '',
    tags: [] as string[]
  };


  constructor(
    public dialogRef: MatDialogRef<DialogProductCreateOrEditComponent>,
    private productService: ProductsService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: ReceiveDetailsData,
  ) { }

  ngOnInit(): void {
    this.getCategories();
    if(this.data?.product._id){
      this.stateEdit = true
      this.productId = this.data.product._id
      this.product = {...this.data.product}
      const tagsArray = Array.isArray(this.product.tags) ? this.product.tags : [this.product.tags];
      this.categoriesSelected.setValue(tagsArray);
    }
  }

  addCategory (){
    if (this.categories.includes(this.newCategory)) {
      this._snackBar.open('La categoría a crear ya se encuentra entre las existentes', 'close');
    }else{
      this.categories.push(this.newCategory)
      this._snackBar.open('Categoría creada de manera exitosa, debe seleccionarla', 'close');
      this.newCategory = ''
    }

  }


  onNoClick(): void {
    this.dialogRef.close();
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

  save(){
    if (this.stateEdit){
      this.productService.editProduct({ ...this.product, tags: this.categoriesSelected.value, _id: this.productId }).subscribe({
        next: (response: any) => {
          this.dialogRef.close(response);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }else{
      if (!this.product.name || !this.product.stock || !this.product.price || !this.product.sku) {
        window.alert('Asegúrese de tener los componentes obligatorios completados');
      }else{
        this.productService.createProduct({
          ...this.product,
          tags: this.categoriesSelected.value,
          name: this.product.name!,
          stock: this.product.stock!,
          price: this.product.price!,
          sku: this.product.sku!
        }).subscribe({
          next: (response: any) => {
            this.dialogRef.close(response);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }


    }

  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card'; // Importa MatCardModule
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DialogProductCreateOrEditComponent } from './dialog-product-create-or-edit/dialog-product-create-or-edit.component'; // Importa el módulo correspondiente
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductCardComponent,
    ProductDetailComponent,
    DialogProductCreateOrEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }

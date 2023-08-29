import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MatCardModule } from '@angular/material/card'; // Importa MatCardModule
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { DialogProductCreateOrEditComponent } from './components/dialog-product-create-or-edit/dialog-product-create-or-edit.component';
import { ProductsListComponent } from './views/products-list/products-list.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FiltersComponent } from './components/filters/filters.component';
@NgModule({
  declarations: [
    ProductsListComponent,
    ProductCardComponent,
    ProductDetailComponent,
    DialogProductCreateOrEditComponent,
    PaginatorComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
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

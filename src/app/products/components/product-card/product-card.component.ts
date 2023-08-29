import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetailCard } from '../../types';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product: ProductDetailCard = {};
  @Input() stateDetail: boolean = false;

  @Output() openEditor = new EventEmitter();
  @Output() deleteProduct = new EventEmitter();

  constructor(private router: Router){}

  redirectToDetail() {
    this.router.navigate(['/details', this.product?._id]);
  }

  emitEventEditor() {
    this.openEditor.emit();
  }

  emitEventDelete() {
    this.deleteProduct.emit();
  }

}

import { Component } from '@angular/core';
import { Product } from '../Models/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  
selectedProduct?: Product;
showModal: boolean = false;

viewProductDetails(product: Product) {
  this.selectedProduct = product;
  this.showModal = true;
}

closeModal() {
  this.showModal = false;
}
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute, Router } from '@angular/router';;
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../Models/product';
import { Services } from '../services/Product-service';



@Component({
  selector: 'app-products-list',
  imports: [RouterOutlet, RouterLink,CommonModule,FormsModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit {

  products: Product[] = [];
  returnUrl: String | null = null;
  selectedId: Number | null = null;

  constructor(
    private Services: Services,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void  {
    this.products = this.Services.getProducts();
  }

  getProduct(p: Product): void {
    this.selectedId = p.id;
    this.router.navigate(['/product0', p.id, 'details'])
  }

  viewProductDetails(product: any) {
    console.log("Selected product:", product);
    this.router.navigate(['/product-details', product.id]);
  }


}

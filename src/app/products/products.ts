import { Component } from '@angular/core';
import { Product } from '../Models/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Product[] = [
{
id: 1,
name: "Laptop",
category: "Electronics",
price: 45000,
stock: 5,
status: "Available",
description: "High performance laptop",
brand: "ACER",
rating: 5.5,
supplier: "PC BAGUIO"
},
{
id: 2,
name: "Mouse",
category: "Accessories",
price: 600,
stock: 0,
status: "Out of Stock",
description: "Gaming Mouse",
brand: "Logitech",
rating: 4.2,
supplier: "PC Worx"
},

{
id: 3,
name: "Keyboard",
category: "Accessories",
price: 1000,
stock: 20,
status: "Limited Stocks",
description: "Gaming Keyboard",
brand: "Redragon Gaming",
rating: 4.9,
supplier: "PC Baguio"
},

{
id: 4,
name: "NVME SSD",
category: "Component",
price: 15000,
stock: 30,
status: "Limited stock due to higher price",
description: "SSD storage",
brand: "MSI",
rating: 5.0,
supplier: "PC HUB"
},
{
id: 5,
name: "Power Supply Unit",
category: "Component",
price: 10,
stock: 2,
status: "Available",
description: "PSU for PC",
brand: "CORSAIR",
rating: 4.4,
supplier: "PC UNIX"
},
{
id: 6,
name: "Speaker",
category: "Accessories",
price: 1500,
stock: 20,
status: "Available",
description: "Gaming Speaker",
brand: "Popcorn",
rating: 3.8,
supplier: "PC UNIX"
},
{
id: 7,
name: "Monitor",
category: "Electronics",
price: 70,
stock: 10,
status: "Available",
description: "Gaming Monitor",
brand: "GAMDIAS",
rating: 4.9,
supplier: "PC Worx"
},
{
id: 8,
name: "Printer",
category: "Component",
price: 5,
stock: 0,
status: "Out of Stock",
description: "Printer for Office",
brand: "CANON",
rating: 4.0,
supplier: "G-TECH"
},
{
id: 9,
name: "TV",
category: "Electronics",
price: 5,
stock: 2,
status: "Limited Stock",
description: "4K TV",
brand: "HISENSE",
rating: 5.0,
supplier: "G-TECH"
},
{
id: 10,
name: "Mouse",
category: "Accessories",
price: 600,
stock: 0,
status: "Out of Stock",
description: "Gaming Mouse",
brand: "Logitech",
rating: 4.2,
supplier: "PC Worx"
}
];

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

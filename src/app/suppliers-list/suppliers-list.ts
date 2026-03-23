import { CommonModule } from '@angular/common';
import { SupplierServices } from './../services/supplier-services';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../Models/Supplier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppliers-list',
  imports: [CommonModule],
  templateUrl: './suppliers-list.html',
  styleUrl: './suppliers-list.css',
})
export class SuppliersList implements OnInit {
   suppliers: Supplier[] = [];

  constructor(
    private SupplierServices: SupplierServices,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.suppliers = this.SupplierServices.getSuppliers();
  }

  viewSupplierDetails(id: number) {
    this.router.navigate(['/suppliers', id]);
  }
}

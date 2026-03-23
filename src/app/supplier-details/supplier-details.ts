import { SupplierServices } from './../services/supplier-services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from '../Models/Supplier';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-supplier-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier-details.html',
  styleUrls: ['./supplier-details.css']
})
export class SupplierDetails implements OnInit {

  supplier!: Supplier;
  supplierId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private SupplierServices: SupplierServices
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      this.supplierId = +params['id'];

      const data =
        this.SupplierServices.getSupplierById(this.supplierId);

      if (data) {
        this.supplier = data;
      }

    });

  }

  saveChanges() {

    this.SupplierServices.updateSupplier(this.supplier);

  }

  goBack() {

    this.router.navigate(['/suppliers']);

  }

}

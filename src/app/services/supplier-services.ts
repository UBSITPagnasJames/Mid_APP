import { Injectable } from '@angular/core';
import { Supplier } from '../Models/Supplier';

@Injectable({
  providedIn: 'root',
})
export class SupplierServices {
   private suppliers: Supplier[] = [
    {
      id: 1,
      supplierName: 'TechSource Inc.',
      location: 'Manila',
      email: 'tech@source.com',
      contactPerson: 'Juan Dela Cruz',
      phone: '09123456789',
      productsSupplied: ['Keyboard', 'Mouse'],
      active: true
    },
    {
      id: 2,
      supplierName: 'Global Parts',
      location: 'Cebu',
      email: 'global@parts.com',
      contactPerson: 'Maria Santos',
      phone: '09987654321',
      productsSupplied: ['Monitor', 'CPU'],
      active: true
    },
    {
      id: 3,
      supplierName: 'SupplyHub',
      location: 'Baguio',
      email: 'hub@supply.com',
      contactPerson: 'Pedro Reyes',
      phone: '09112223344',
      productsSupplied: ['RAM', 'SSD'],
      active: true
    },
    {
      id: 4,
      supplierName: 'OfficeNeeds',
      location: 'Davao',
      email: 'office@needs.com',
      contactPerson: 'Ana Cruz',
      phone: '09223334444',
      productsSupplied: ['Paper', 'Ink'],
      active: true
    },
    {
      id: 5,
      supplierName: 'CompWorld',
      location: 'Manila',
      email: 'comp@world.com',
      contactPerson: 'Leo Tan',
      phone: '09334445555',
      productsSupplied: ['Laptop', 'Mouse'],
      active: true
    },
    {
      id: 6,
      supplierName: 'NetGear Supply',
      location: 'Cavite',
      email: 'net@gear.com',
      contactPerson: 'Chris Lim',
      phone: '09445556666',
      productsSupplied: ['Router', 'Switch'],
      active: true
    },
    {
      id: 7,
      supplierName: 'PrinterZone',
      location: 'Laguna',
      email: 'print@zone.com',
      contactPerson: 'Ella Cruz',
      phone: '09556667777',
      productsSupplied: ['Printer', 'Ink'],
      active: true
    },
    {
      id: 8,
      supplierName: 'CableLink',
      location: 'Quezon',
      email: 'cable@link.com',
      contactPerson: 'Mark Lee',
      phone: '09667778888',
      productsSupplied: ['LAN Cable', 'HDMI'],
      active: true
    },
    {
      id: 9,
      supplierName: 'BatteryPro',
      location: 'Pampanga',
      email: 'battery@pro.com',
      contactPerson: 'Sarah Kim',
      phone: '09778889999',
      productsSupplied: ['Battery', 'UPS'],
      active: true
    },
    {
      id: 10,
      supplierName: 'Chipset Ltd.',
      location: 'Pasig',
      email: 'chip@set.com',
      contactPerson: 'Ronnie Yap',
      phone: '09889990000',
      productsSupplied: ['Motherboard', 'GPU'],
      active: true
    }
  ];
  
getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  getSupplierById(id: number): Supplier | undefined {
    return this.suppliers.find(s => s.id === id);
  }

  updateSupplier(updatedSupplier: Supplier) {
    const index = this.suppliers.findIndex(
      s => s.id === updatedSupplier.id
    );

    if (index !== -1) {
      this.suppliers[index] = updatedSupplier;
    }
  }
}


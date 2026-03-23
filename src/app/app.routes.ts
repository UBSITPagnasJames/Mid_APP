import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Interpolation } from './DataBinding/interpolation/interpolation';
import { Property } from './DataBinding/property/property';
//import { Event } from './DataBinding/event/event';
import { TwoWay } from './DataBinding/two-way/two-way';
import { Attribute } from './DataBinding/attribute/attribute';
import { Class } from './DataBinding/class/class';
import { Style } from './DataBinding/style/style';
import { Navi } from './Components/navi/navi';
import { EventComponent } from './DataBinding/event/event';
import { Products } from './products/products';
import { ProductsList } from './products-list/products-list';
import { ProductDetails } from './product-details/product-details';
import { SuppliersList } from './suppliers-list/suppliers-list';
import { SupplierDetails } from './supplier-details/supplier-details';

export const routes: Routes = [
    {path: 'Home', component: Home},
    {path: 'Navi', component: Navi},
    {path: 'Interpolation', component: Interpolation},
    {path: 'Property', component: Property},
    {path: 'Event', component: EventComponent},
    {path: 'Two-way', component: TwoWay},
    {path: 'Attribute', component: Attribute},
    {path: 'Class', component: Class},
    {path: 'Style', component: Style},
    {path: 'product', component: Products},
    {path: '', redirectTo: 'Home', pathMatch: 'full'},
    {path: 'ProductsList', component: ProductsList},
    {path: 'suppliers', component: SuppliersList},
    {path: 'suppliers/:id', component: SupplierDetails},
    { path: 'products0', component: ProductsList, children: [{
        path: ':id',
        children: [
          { path: 'Details', component: ProductDetails }
        ]
      }
    ]
  },
];

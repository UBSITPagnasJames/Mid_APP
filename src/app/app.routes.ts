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
    {path: '', redirectTo: 'Home', pathMatch: 'full'}
];

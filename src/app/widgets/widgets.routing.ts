import { Routes, RouterModule } from '@angular/router';
import {WidgetsComponent} from "./widgets.component";

const widgetsRoutes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/widgets' },
  { path: 'widgets', component: WidgetsComponent}
];

export const WidgetsRouting = RouterModule.forChild(widgetsRoutes);

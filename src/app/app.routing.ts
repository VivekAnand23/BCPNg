import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  { path: 'test', loadChildren: 'app/widgets/widgets.module'},
  { path: '**', pathMatch:'full', redirectTo: 'app/pages/voicemail/voicemail.module' } //catch any unfound routes and redirect to home page
];

export const app_routing = RouterModule.forRoot(app_routes);

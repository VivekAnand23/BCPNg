import { Routes, RouterModule } from '@angular/router';

import { VoicemailComponent }   from './voicemail.component';

const voicemailRoutes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/voicemail' },
  { path: 'voicemail', component: VoicemailComponent}
];

export const VoicemailRouting = RouterModule.forChild(voicemailRoutes);


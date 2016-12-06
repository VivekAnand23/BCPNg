import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';

import {VoicemailComponent} from './voicemail.component';
import {VoicemailRouting} from './voicemail.routing';

import {WidgetsModule} from "../widgets/widgets.module";
import {ComponentsModule} from "../components/components.module";

@NgModule({
  imports: [CommonModule, VoicemailRouting, ComponentsModule, WidgetsModule],
  declarations: [VoicemailComponent],
  exports: [VoicemailComponent, CommonModule]
})
export default class VoicemailModule {
}

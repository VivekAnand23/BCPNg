import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';

import {VoicemailComponent} from './voicemail.component';
import {VoicemailRouting} from './voicemail.routing';

import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [CommonModule, VoicemailRouting, ComponentsModule],
  declarations: [VoicemailComponent],
  exports: [VoicemailComponent, CommonModule]
})
export default class VoicemailModule {
}

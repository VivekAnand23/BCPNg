import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';

import {app_routing} from './app.routing';

import {CoreModule}   from './core/core.module';
import {SharedModule}   from './shared/shared.module';
import {WidgetsModule} from "./widgets/widgets.module";
import VoicemailModule from "./pages/voicemail/voicemail.module";

@NgModule({
  imports: [
    BrowserModule,
    app_routing,
    VoicemailModule,
    WidgetsModule,
    CoreModule,   //Singleton objects
    SharedModule  //Shared (multi-instance) objects
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}

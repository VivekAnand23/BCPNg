import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {HeaderComponent} from "./header/header.component";
import {PanelComponent} from "./panel/panel.component";
import {NavPanelComponent} from "./navpanel/navpanel.component";
import {PanelHeaderComponent} from "./panelheader/panel-header.component";
import {PanelHeadingComponent} from "./panelheading/panel-heading.component";
import {WidgetsModule} from "../widgets/widgets.module";

@NgModule({
  imports: [CommonModule, WidgetsModule],
  declarations: [HeaderComponent, NavPanelComponent, PanelComponent, PanelHeaderComponent, PanelHeadingComponent],
  exports: [HeaderComponent, NavPanelComponent, PanelComponent, PanelHeaderComponent, PanelHeadingComponent]
})
export class ComponentsModule {
}

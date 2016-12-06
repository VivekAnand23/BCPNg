import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {WidgetsRouting} from "./widgets.routing";

import {SizeMeterWidget} from "./size-meter/size-meter.widget";
import {NotificationBadgeWidget} from "./notification-badge/notification-badge.widget";
import {HeadingTextWidget} from "./headline-text/headline-text";
import {BalanceWidget} from "./balance/balance";

@NgModule({
  imports: [CommonModule, WidgetsRouting],
  declarations: [SizeMeterWidget, NotificationBadgeWidget, HeadingTextWidget, BalanceWidget],
  exports: [SizeMeterWidget, NotificationBadgeWidget, HeadingTextWidget, BalanceWidget]
})
export class WidgetsModule {
}

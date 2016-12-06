import {Component, Input} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'notification-badge',
  templateUrl: 'notification-badge.widget.html'
})
export class NotificationBadgeWidget {
  @Input() notificationCount: number;
}

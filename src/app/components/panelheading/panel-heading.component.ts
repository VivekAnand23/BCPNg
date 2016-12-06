import {Component, Input} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'panel-heading',
  templateUrl: 'panel-heading.component.html'
})
export class PanelHeadingComponent {
  @Input() heading: string;
  @Input() notificationCount: number;
  @Input() reload: boolean;
}

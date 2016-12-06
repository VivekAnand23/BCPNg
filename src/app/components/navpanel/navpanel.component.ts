import {Component, Input} from "@angular/core";
@Component({
  moduleId: module.id,
  selector: 'nav-panel',
  templateUrl: 'nav-panel.component.html'
})
export class NavPanelComponent {
  @Input() userId: string;
  @Input() groupId: string;
}

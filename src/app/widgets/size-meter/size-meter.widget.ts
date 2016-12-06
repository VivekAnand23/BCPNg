import {Component, Input} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'size-meter',
  templateUrl: 'size-meter.widget.html'
})
export class SizeMeterWidget {
  @Input() usageValue: number;
  @Input() totalValue: number;
  @Input() percentage: number;
}

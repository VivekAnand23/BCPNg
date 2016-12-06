import {Component, Input} from "@angular/core";
/**
 * Usage:
 * <code>
 *    <balance heading='Balance' value='$100.0'></balance>
 * </code>
 */
@Component({
  moduleId: module.id,
  selector: 'balance',
  template: `<span class="bcp-balance-details block">{{heading}}</span>
	<span class="bcp-balance-amount block">{{value}}</span>`
})
export class BalanceWidget {
  @Input() heading: string;
  @Input() value: string;
}

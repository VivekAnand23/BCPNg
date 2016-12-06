import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'heading-text',
  template: '<span class="bcp-font-headline-{{size}}">{{message}}</span>'
})
export class HeadingTextWidget {
}

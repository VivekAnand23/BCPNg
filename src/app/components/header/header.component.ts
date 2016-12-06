import {Component} from "@angular/core";
import {Input} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent{
  @Input() heading: string;
  @Input() userName: string;
  @Input() phoneNumber: string;
  @Input() featureTitle: string;
}


import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'widgets',
  templateUrl: 'widgets.component.html'
})
export class WidgetsComponent {
  pageHeading: string;

  constructor(private router: Router) {
    this.pageHeading = 'My Page Heading';
  }
}

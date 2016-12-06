import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'voicemail',
  templateUrl: 'voicemail.component.html'
})
export class VoicemailComponent implements OnInit {
  pageHeading: string;

  constructor(private router: Router) {
    this.pageHeading = 'My Page Heading';
  }

  ngOnInit() {
    //Next line needs a better technique. This is the easiest way
    //to get child route path that I've found so far.
    //Hoping this will be easier with later builds of router
  }
}

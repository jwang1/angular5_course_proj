import {
  Component,
  ViewChild,
  AfterViewInit,
  DoCheck
} from '@angular/core';

import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, DoCheck {
  title = 'Course Project';

  @ViewChild('navToFeature')
  featureToShow: HeaderComponent;

  displayingFeature = '';

  ngAfterViewInit() {
    // not working, this.featureToShow.feature is BLANK  when this ngAfterViewInit() is called
    // Because, this.featureToShow.feature is updated Dynamically when NavComponent::onSelect()
    // is called via menu clicked.   When it's clicked,  the VIEW/template (header.component)
    // was already INIT'ed,  so will NOT happen again.  Going to use ngDoCheck - which is called
    // all the time, need to be very careful - NOT to put heavy stuff there.
    this.displayingFeature = this.featureToShow.feature;
  }

  /**
   * Called all the time, put very LIGHT stuff here, otherwise, the whole app suffers.
   */
  ngDoCheck() {
    this.displayingFeature = this.featureToShow.feature;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // default it to recipe
  // It gets updated when NavComponent::onSelect is called
  // when "recipe" or "shopping-list" menu is clicked / selecte
  feature = 'recipe';

  constructor() {
  }

  ngOnInit() {
  }

  navFeature($event) {
    this.feature = $event;
  }
}

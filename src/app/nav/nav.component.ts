import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output()
  selectedFeature = new EventEmitter<string>();

  activeFeature = 'recipe';

  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.selectedFeature.emit(feature);
    this.activeFeature = feature;
  }
}

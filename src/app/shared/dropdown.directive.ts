import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // I was using 'style.class' (and assign open or blank) which is incorrect
  // the way of open is something like disabled class; a boolean value.
  @HostBinding('class.open')
  isOpen = false;

  @HostListener('click', ['$event.target']) click() {
    this.isOpen = !this.isOpen;
  }
}

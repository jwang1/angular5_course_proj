import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule
  ],
  exports: [
    BsDropdownModule,
    TooltipModule,
    ModalModule
  ],
  declarations: []
})
export class AppBootstrapModule { }

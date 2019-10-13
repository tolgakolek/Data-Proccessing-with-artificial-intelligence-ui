import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { FormModule } from './file/form.module';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbDropdownModule,
    FormModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }

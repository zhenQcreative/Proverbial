import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersesComponent } from './verses.component';

@NgModule({
  declarations: [
    VersesComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    VersesComponent
  ]
})
export class VersesModule { }

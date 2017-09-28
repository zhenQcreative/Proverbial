import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteVersesComponent } from './favorite-verses.component';
import { VersesModule } from '../verses/verses.module';

@NgModule({
  declarations: [
    FavoriteVersesComponent
  ],
  imports: [
    CommonModule,
    VersesModule
  ],
  providers: [],
  exports: [FavoriteVersesComponent]
})
export class FavoriteVersesModule { }

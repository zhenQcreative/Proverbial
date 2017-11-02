import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteVersesComponent } from './favorite-verses.component';
import { VersesModule } from '../verses/verses.module';
import { BibleVersesService } from 'app/common-services/bible-verses.service';

@NgModule({
  declarations: [
    FavoriteVersesComponent
  ],
  imports: [
    CommonModule,
    VersesModule
  ],
  providers: [BibleVersesService],
  exports: [FavoriteVersesComponent]
})
export class FavoriteVersesModule { }

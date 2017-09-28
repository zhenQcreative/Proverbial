import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyVerseComponent } from './daily-verse.component';
import { VersesModule } from '../verses/verses.module';

@NgModule({
    declarations: [
      DailyVerseComponent
    ],
    imports: [
      CommonModule,
      VersesModule
    ],
    providers: [],
    exports: [DailyVerseComponent]
  })
export class DailyVerseModule { }

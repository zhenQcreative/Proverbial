import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { VersesModule } from './verses/verses.module';
import { DailyVerseModule } from './daily-verse/daily-verse.module';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app-container/app.component';
import { BibleVersesService } from 'app/common-services/bible-verses.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    VersesModule,
    DailyVerseModule,
    AppRoutingModule
  ],
  providers: [ BibleVersesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

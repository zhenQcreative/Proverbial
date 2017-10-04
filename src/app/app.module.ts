import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { VersesModule } from './verses/verses.module';
import { DailyVerseModule } from './daily-verse/daily-verse.module';
import { FavoriteVersesModule } from './favorite-verses/favorite-verses.module';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app-container/app.component';

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
    FavoriteVersesModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

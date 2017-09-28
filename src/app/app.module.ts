import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VersesModule } from './verses/verses.module';
import { DailyVerseModule } from './daily-verse/daily-verse.module';
import { FavoriteVersesModule } from 'app/favorite-verses/favorite-verses.module';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

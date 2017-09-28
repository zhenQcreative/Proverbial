import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyVerseComponent } from './daily-verse/daily-verse.component';
import { FavoriteVersesComponent } from './favorite-verses/favorite-verses.component';

const routes: Routes = [
  { path: '', redirectTo: '/daily-verse', pathMatch: 'full' },
  { path: 'daily-verse',  component: DailyVerseComponent },
  { path: 'favorite-verses',  component: FavoriteVersesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

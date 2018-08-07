import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyVerseComponent } from './daily-verse/daily-verse.component';

const routes: Routes = [
  { path: '', redirectTo: '/daily-verse', pathMatch: 'full' },
  { path: 'daily-verse',  component: DailyVerseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

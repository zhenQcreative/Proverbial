import { Component, OnInit } from '@angular/core';

import { Verse } from '../verses/verses';
import { BibleVersesService } from 'app/common-services/bible-verses.service';

@Component({
  selector: 'app-favorite-verses',
  templateUrl: './favorite-verses.component.html',
  styleUrls: ['./favorite-verses.component.scss'],
  providers: [BibleVersesService]
})
export class FavoriteVersesComponent implements OnInit {
  myVerses: Verse[];

  constructor(public bibleService: BibleVersesService) { }

  ngOnInit() {
    this.myVerses = this.bibleService.data;
  }
  getVerses(): void {
    this.myVerses = this.bibleService.getData();
  }

}

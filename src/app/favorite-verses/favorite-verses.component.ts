import { Component, OnInit } from '@angular/core';

import { Verse } from '../verses/verses';

@Component({
  selector: 'app-favorite-verses',
  templateUrl: './favorite-verses.component.html',
  styleUrls: ['./favorite-verses.component.scss']
})
export class FavoriteVersesComponent implements OnInit {
  myVerses: Verse[] = [
    {
      book: 'Proverbs',
      chapter: 1,
      verseNumber: 1,
      verse: 'The proverbs of Solomon the son of David, king of Israel:',
      favorite: false
    },
    {
      book: 'Proverbs',
      chapter: 1,
      verseNumber: 2,
      verse: 'To know wisdom and instruction, To perceive the words of understanding,',
      favorite: true
    },
    {
      book: 'Proverbs',
      chapter: 1,
      verseNumber: 3,
      verse: 'To receive the instruction of wisdom, Justice, judgment, and equity;',
      favorite: true
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

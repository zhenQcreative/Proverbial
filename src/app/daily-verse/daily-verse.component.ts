import { Component, OnInit } from '@angular/core';
import { Verse } from '../verses/verses';

@Component({
  selector: 'app-daily-verse',
  templateUrl: './daily-verse.component.html',
  styleUrls: ['./daily-verse.component.scss']
})
export class DailyVerseComponent implements OnInit {
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

  randomDailyVerse(): Verse {
    const randomVerseNumber = this.getRandomInt(0, 3);
    return this.myVerses[randomVerseNumber];
  }

  // The maximum is exclusive and the minimum is inclusive
  getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

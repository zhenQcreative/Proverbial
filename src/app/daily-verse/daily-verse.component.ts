import { Component, OnInit } from '@angular/core';
import { Verse } from '../verses/verses';

@Component({
  selector: 'app-daily-verse',
  templateUrl: './daily-verse.component.html',
  styleUrls: ['./daily-verse.component.scss']
})
export class DailyVerseComponent implements OnInit {
  myVerses: Verse[];
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

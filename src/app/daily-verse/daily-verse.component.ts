import { Component, OnInit } from '@angular/core';
import { Verse } from '../verses/verses';
import { BibleVersesService } from 'app/common-services/bible-verses.service';

@Component({
  selector: 'app-daily-verse',
  templateUrl: './daily-verse.component.html',
  styleUrls: ['./daily-verse.component.scss']
})
export class DailyVerseComponent implements OnInit {
  myVerses: Verse[];
  dailyVerse: Verse;

  private intervalTime = 10000;

  constructor(public bibleService: BibleVersesService) { }

  ngOnInit() {
    this.bibleService.getUpdate().subscribe(res => this.myVerses = res.json());
    this.displayVerse();
  }

  displayVerse() {
    setInterval(() => {
      this.randomDailyVerse();
    }, this.intervalTime);
  }

  randomDailyVerse() {
    let randomVerseNumber = 0;
    if (this.myVerses !== undefined && this.myVerses !== null) {
        randomVerseNumber = this.getRandomInt(0, this.myVerses.length);
        this.dailyVerse = this.myVerses[randomVerseNumber];
    }
  }

  // The maximum is exclusive and the minimum is inclusive
  getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

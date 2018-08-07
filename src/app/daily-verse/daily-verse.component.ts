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
  displayVerses: Verse[];
  dailyVerse: Verse;
  myFavorites: boolean;

  private intervalTime = 10000;

  constructor(public bibleService: BibleVersesService) { }

  ngOnInit() {
    this.bibleService.getUpdate().subscribe((res) => {
      this.myVerses = res.json();
      this.displayVerses = res.json();
      this.randomDailyVerse();
    });
    this.displayVerse();
    this.myFavorites = false;
  }

  showFavoritesOnly() {
    this.displayVerses = new Array<Verse>();
    this.myFavorites = !this.myFavorites;
    console.log('fave: ', this.myFavorites);
    this.myVerses.filter((verse) => {
      if (verse.favorite === this.myFavorites) {
        this.displayVerses.push(verse);
      }
      this.randomDailyVerse();
    });
    this.displayVerse();
  }

  displayVerse() {
    setInterval(() => {
      this.randomDailyVerse();
    }, this.intervalTime);
  }

  randomDailyVerse() {
    let randomVerseNumber = 0;
    if (this.displayVerses !== undefined && this.displayVerses !== null) {
      randomVerseNumber = this.getRandomInt(0, this.displayVerses.length);
      this.dailyVerse = this.displayVerses[randomVerseNumber];
    }
  }

  // The maximum is exclusive and the minimum is inclusive
  getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

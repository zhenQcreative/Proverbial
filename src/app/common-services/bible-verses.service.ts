import { Injectable, OnInit } from '@angular/core';
import { Verse } from 'app/verses/verses';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BibleVersesService {

  data: Verse[];
  PROVERBS_URL = '../src/assets/content/proverbs.json';

  constructor(private http: Http) { }

  getVerses(): Observable<Verse[]> {
    return this.http.get(this.PROVERBS_URL)
                    .map(response => this.data);
  }

}

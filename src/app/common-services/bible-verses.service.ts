import { Injectable, OnInit } from '@angular/core';
import { Verse } from 'app/verses/verses';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BibleVersesService {

  data: Verse[];
  PROVERBS_URL = '../src/assets/content/proverbs.json';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
    this.getUpdate().subscribe(res => this.data = res.json());
  }

  getData(): Verse[] {
    return this.data;
  }

  getUpdate() {
   return this.http.get(this.PROVERBS_URL);
  }

}

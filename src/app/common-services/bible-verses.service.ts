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
    this.http.get(this.PROVERBS_URL)
             .subscribe(res => this.data = res.json());
  }

  /* getVerses(): Observable<Verse[]> {
    return this.http.get(this.PROVERBS_URL, {headers: this.headers})
                    .map(response => this.data);
  } */
 /*  getVerses(): Promise<Verse[]> {
    return this.http.get(this.PROVERBS_URL)
                    .toPromise()
                    .then(response => response.json().data as Verse[])
                    .catch(this.handleError);
  } */

  getData(): Verse[] {
    console.log('service data: ', this.data);
    return this.data;
  }

  /* private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  } */

}

import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { VersesModule } from 'app/verses/verses.module';
import { DailyVerseModule } from 'app/daily-verse/daily-verse.module';
import { FavoriteVersesModule } from 'app/favorite-verses/favorite-verses.module';
import { AppRoutingModule } from 'app/app-routing.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VersesModule,
        DailyVerseModule,
        FavoriteVersesModule,
        AppRoutingModule],
      declarations: [
        AppComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Proverbial'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Proverbial');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Proverbial');
  }));
});

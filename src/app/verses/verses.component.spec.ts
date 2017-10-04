import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersesComponent } from './verses.component';
import { Verse } from 'app/verses/verses';
import { By } from '@angular/platform-browser';

describe('VersesComponent', () => {
  let component: VersesComponent;
  let fixture: ComponentFixture<VersesComponent>;
  const mockVerses = {
      book: 'Proverbs',
      chapter: 1,
      verseNumber: 1,
      verse: 'The proverbs of Solomon the son of David, king of Israel:',
      favorite: false
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersesComponent);
    component = fixture.componentInstance;
    component.displayVerse = mockVerses;
    fixture.detectChanges();
  });

  it('should create Verses Component', () => {
    expect(component).toBeTruthy();
  });

  it('should display verse', () => {
    const debugElement = fixture.debugElement.query(By.css('.verseText'));
    const verseText = debugElement.nativeElement;
    expect(verseText.textContent).toContain(mockVerses.verse);
  });

  it('should display verse references as "book chapter : verseNumber"', () => {
    const debugElement = fixture.debugElement.query(By.css('.verseReferences'));
    const verseReferences = debugElement.nativeElement;
    expect(verseReferences.textContent).toContain(mockVerses.book + ' ' + mockVerses.chapter + ' : ' + mockVerses.verseNumber);
  });

  it('should not display image if verse is not favorited', () => {
    const debugElement = fixture.debugElement.query(By.css('.verseText'));
    const span = debugElement.query(By.css('span'));
    expect(span).toBe(null);
  });

  it('should display image star1.png if verse is favorited', () => {
    component.displayVerse.favorite = true;
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span'));
    expect(span).not.toBe(null);
    const img = span.nativeElement.querySelector('img');
    expect(img.src).toContain('star1.png');
  });

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersesComponent } from './verses.component';
import { Verse } from 'app/verses/verses';

describe('VersesComponent', () => {
  let component: VersesComponent;
  let fixture: ComponentFixture<VersesComponent>;
  const mockVerses ={
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

  it('should create verses component', () => {
    expect(component).toBeTruthy();
  });

  it('should display verse', () => {

  });

  it('should display book', () => {

  })

});

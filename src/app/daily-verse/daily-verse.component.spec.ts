import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyVerseComponent } from './daily-verse.component';
import { VersesModule } from 'app/verses/verses.module';

describe('DailyVerseComponent', () => {
  let component: DailyVerseComponent;
  let fixture: ComponentFixture<DailyVerseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VersesModule],
      declarations: [ DailyVerseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyVerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

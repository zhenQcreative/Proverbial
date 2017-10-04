import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteVersesComponent } from './favorite-verses.component';
import { VersesModule } from 'app/verses/verses.module';
import { Verse } from 'app/verses/verses';

describe('FavoriteVersesComponent', () => {
  let component: FavoriteVersesComponent;
  let fixture: ComponentFixture<FavoriteVersesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VersesModule],
      declarations: [ FavoriteVersesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteVersesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Favorite Verses Component', () => {
    expect(component).toBeTruthy();
  });
});

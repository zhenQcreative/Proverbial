import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteVersesComponent } from './favorite-verses.component';

describe('FavoriteVersesComponent', () => {
  let component: FavoriteVersesComponent;
  let fixture: ComponentFixture<FavoriteVersesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteVersesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteVersesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

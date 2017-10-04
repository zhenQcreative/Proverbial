import { TestBed, inject } from '@angular/core/testing';
import { BibleVersesService } from '../common-services/bible-verses.service';
import { HttpModule } from '@angular/http';

describe('BibleVersesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [BibleVersesService]
    });
  });

  it('should ...', inject([BibleVersesService], (service: BibleVersesService) => {
    expect(service).toBeTruthy();
  }));
});

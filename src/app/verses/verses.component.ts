import { Component, OnInit, Input } from '@angular/core';
import { Verse } from './verses';

@Component({
  selector: 'app-verses',
  templateUrl: './verses.component.html',
  styleUrls: ['./verses.component.scss']
})
export class VersesComponent implements OnInit {
  @Input() displayVerse: Verse;

  constructor() { }

  ngOnInit() {
  }

}

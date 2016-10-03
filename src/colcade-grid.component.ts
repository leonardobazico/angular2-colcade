declare var require: any;

import { Component,
         ElementRef,
         Input,
         OnInit,
         OnDestroy } from '@angular/core';

// import * as Colcade from 'colcade';
const Colcade = require('colcade');

import { ColcadeGridOptions } from './colcade-grid-options';

@Component({
  selector: '[colcade-grid], colcade-grid',
  template: `<ng-content></ng-content>`
})
export class ColcadeGridComponent implements OnInit, OnDestroy {
  @Input() public options: ColcadeGridOptions;

  private colcade = null;

  constructor(private _element: ElementRef) { }

  ngOnInit() {
    // Create colcade options object
    if (!this.options) {
      this.options = {};
    }

    // Set default columns
    if (!this.options.columns) {
        this.options.columns = '[colcade-grid-col], colcade-grid-col';
    }

    // Set default items
    if (!this.options.items) {
        this.options.items = '[colcade-grid-item], colcade-grid-item';
    }

    // Initialize Colcade
    this.colcade = new Colcade(this._element.nativeElement, this.options);

    console.log('this.colcade', this.colcade);
  }

  ngOnDestroy() {
    if (this.colcade) {
      this.colcade.destroy();
    }
  }

  append(element: HTMLElement) {
    console.log('append');
    this.colcade.append(element);

    console.log('this.colcade', this.colcade);
  }
}

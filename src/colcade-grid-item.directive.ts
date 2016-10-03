import {
  Directive,
  Inject,
  ElementRef,
  forwardRef,
  AfterViewInit
} from '@angular/core';

import { ColcadeGridComponent } from './colcade-grid.component';

@Directive({
  selector: '[colcade-grid-item], colcade-grid-item'
})
export class ColcadeGridItemDirective implements AfterViewInit {

  constructor(
    private _element: ElementRef,
    @Inject(forwardRef(() => ColcadeGridComponent)) private _parent: ColcadeGridComponent
  ) { }

  ngAfterViewInit() {
    this._parent.append(this._element.nativeElement);
  }
}

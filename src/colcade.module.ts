import { NgModule } from '@angular/core';

import { ColcadeGridComponent } from './colcade-grid.component';
import { ColcadeGridColDirective } from './colcade-grid-col.directive';
import { ColcadeGridItemDirective } from './colcade-grid-item.directive';

const COMPONENTS = [
  ColcadeGridComponent,
  ColcadeGridColDirective,
  ColcadeGridItemDirective
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS
})

export class ColcadeModule { }

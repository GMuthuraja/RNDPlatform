import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule
  ],
  exports: [
    MatGridListModule,
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule
  ]
})
export class MaterialModule { }

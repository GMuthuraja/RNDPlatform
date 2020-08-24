import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StylePaginatorDirectiveDirective } from '../../directive/style-paginator-directive.directive';

@NgModule({
  declarations: [StylePaginatorDirectiveDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StylePaginatorDirectiveDirective
  ]
})
export class ShareModule { }

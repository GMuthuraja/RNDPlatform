import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StylePaginatorDirectiveDirective } from '../../directive/style-paginator-directive.directive';
import { LoaderComponent } from '../../components/loader/loader.component';

@NgModule({
  declarations: [
    StylePaginatorDirectiveDirective,
    LoaderComponent],
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
    StylePaginatorDirectiveDirective,
    LoaderComponent
  ]
})
export class ShareModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpComponent } from './otp.component';
import { OtpRoutingModule } from './otp-routing.module';


@NgModule({
  declarations: [OtpComponent],
  imports: [
    CommonModule,
    OtpRoutingModule
  ]
})
export class OtpModule { }

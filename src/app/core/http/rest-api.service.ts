import { Injectable } from '@angular/core';
import { HttpParameterCodec, HttpParams, HttpClient } from '@angular/common/http';
import { PASSCODE_VALUE, LOGIN_URL, SEND_OTP_ACTION, OTP_URL, VERIFY_OTP_ACTION } from 'src/app/utils/constants';
import { GlobalStorageService } from '../services/global-storage.service';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  userId: any;

  constructor(
    private httpClient: HttpClient,
    private globalStorageService: GlobalStorageService) { }

  /** Login API */
  login(cropID, password) {
    let payload = new HttpParams({ encoder: new CustomEncoder() });
    payload = payload.append("Passcode", PASSCODE_VALUE);
    payload = payload.append("LID", cropID.trim());
    payload = payload.append("PWD", password.trim());
    payload = payload.append("Encrypted", 'true');

    return this.httpClient.post(LOGIN_URL, payload);
  }

  /** Send OTP API */
  sendOTP(cropID, deviceID) {

    this.userId = this.globalStorageService.userId;

    let payload = new HttpParams({ encoder: new CustomEncoder() });
    payload = payload.append("R", SEND_OTP_ACTION);
    payload = payload.append("C", cropID.trim());
    payload = payload.append("D", deviceID ? deviceID.trim() : '');

    return this.httpClient.post(OTP_URL, payload);
  }

  /** Verify OTP API */
  verifyOTP(cropID, deviceID, otp) {

    this.userId = this.globalStorageService.userId;

    let payload = new HttpParams({ encoder: new CustomEncoder() });
    payload = payload.append("R", VERIFY_OTP_ACTION);
    payload = payload.append("C", cropID.trim());
    payload = payload.append("D", deviceID ? deviceID.trim() : '');
    payload = payload.append("O", otp ? otp.trim() : '');

    return this.httpClient.post(OTP_URL, payload);
  }
}


/** To encode and decode Http Param values passing into API */
class CustomEncoder implements HttpParameterCodec {
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }

  encodeValue(value: string): string {
    return encodeURIComponent(value);
  }

  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}

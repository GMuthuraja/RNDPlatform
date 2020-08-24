import { Injectable } from '@angular/core';
import { HttpParameterCodec, HttpParams, HttpClient } from '@angular/common/http';
import { PASSCODE_VALUE, LOGIN_URL, SEND_OTP_ACTION, OTP_URL, VERIFY_OTP_ACTION, FIREBASE_Authorization_KEY, CONTENT_TYPE_JSON, FIREBASE_URL, PUSH_PRIORITY, PUSH_PLUGIN_ACTIVITY, PUSH_SOUND, PUSH_ICON, PUSH_SURVEY } from 'src/app/utils/constants';
import { GlobalStorageService } from '../services/global-storage.service';
import { GET_RATES, CONTENT_TYPE_URL_ENCODED, RATING_URL } from 'src/app/utils/constants';

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

  getEstaffRating() {

    let payload = new HttpParams({ encoder: new CustomEncoder() });
    payload = payload.append("R", GET_RATES);

    return this.httpClient.post(RATING_URL, payload);
    // return this.httpClient.get(RATING_URL);
  }

  /**
   * Push Notification Service
  */
  sendNotificationAPI(title, description, topic) {
    let Body = {
      "notification": {
        "title": title,
        "body": description,
        "sound": PUSH_SOUND,
        "click_action": PUSH_PLUGIN_ACTIVITY,
        "icon": PUSH_ICON,
        "image": ""
      },
      "data": {
        "title": title,
        "body": description,
        "survey": PUSH_SURVEY,
        "link": "",
        "image": ""
      },
      "to": "/topics/" + topic.toUpperCase(),
      "priority": PUSH_PRIORITY,
      "restricted_package_name": ""
    }

    let header = {
      "Content-Type": CONTENT_TYPE_JSON,
      "Authorization": FIREBASE_Authorization_KEY
    }

    return this.httpClient.post(FIREBASE_URL, Body, {
      headers: header
    })
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

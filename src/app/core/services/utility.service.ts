import { Injectable } from '@angular/core';
import { isNullOrUndefined } from "util";

@Injectable({
  providedIn: 'root'
})

export class UtilityService {

  constructor() { }

  /**
   * Validate null, undefined and length for api response
   * @param res Api service json response
   */
  validateApiResponse(res) {
    if (!isNullOrUndefined(res)) {
      if (res.hasOwnProperty("message")) {
        if (res["message"].length > 0) {
          if (res["message"][0].hasOwnProperty("Status")) {
            return true;
          }
        }
      }
    }
    return false;
  }

  /** 
   * It will restrict user to type special character in input box 
   * */
  restrictChars(event) {
    var regex = new RegExp("^[0-9]+$");

    if (!regex.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
  }

  /** 
  * It will restrict user to type special character in input box 
  * */
  restrictSpecialChars(event) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    if (!regex.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z0-9]/g, "");
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { EncryptionService } from 'src/app/core/services/encryption.service';
import { RestApiService } from 'src/app/core/http/rest-api.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { GlobalStorageService } from 'src/app/core/services/global-storage.service';
import { UtilityService } from 'src/app/core/services/utility.service';
import { USER_INFO_KEY, PWD_KEY, LID_KEY } from 'src/app/utils/constants';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})

export class OtpComponent implements OnInit {

  userId: any;
  OTPForm: FormGroup;
  otpInValid: any;
  limitExceed: any;
  OTPinterval: any;
  canOTPResend: boolean = false;
  userInfo: any;
  password: any;
  subscription: any;
  otpTimer: any;

  constructor(
    private formBuilder: FormBuilder,
    private api: RestApiService,
    private storageService: LocalStorageService,
    private globalStorageService: GlobalStorageService,
    private router: Router,
    public utilityService: UtilityService) {
    //Receiving params from previous page
    this.fetchRouteParams();
  }

  ngOnInit() {
    //login formbuilder and formcontroller declaration
    this.initOTPForm();

    //Initiates OTP timer 
    this.initiateOTPTimer();
  }


  /**
   * Receiving params from previous page
   * */
  fetchRouteParams() {
    //Validating whether route params is not null
    if (this.router.getCurrentNavigation().extras.state) {
      this.userInfo = this.router.getCurrentNavigation().extras.state.user_info;
      this.userId = this.router.getCurrentNavigation().extras.state.user_id;
      this.password = this.router.getCurrentNavigation().extras.state.password;
    }
  }


  /**
   * Initialize the OTP form
   */
  initOTPForm() {
    this.OTPForm = this.formBuilder.group({
      otp: ["", Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4)])]
    });
  }

  /**
   * Initiates OTP timer
   * */
  initiateOTPTimer() {
    let startTimeInSeconds = 120;
    this.OTPinterval = setInterval(() => {
      startTimeInSeconds--;
      if (startTimeInSeconds == 0) {
        clearInterval(this.OTPinterval);
        this.canOTPResend = true;
      }
      this.otpTimer = this.getSecondsAsDigitalClock(startTimeInSeconds);
    }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var minutesString = '';
    var secondsString = '';
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return minutesString + ':' + secondsString;
  }


  submitOTP(form: NgForm) {
    this.otpInValid = false;
    this.limitExceed = false;

    let otp = form["otp"];

    let device_id = uuidv4();
    if (device_id) {
      device_id = device_id.replace(/-/g, "");
    }

    this.subscription = this.api.verifyOTP(this.userId, device_id, otp).subscribe(res => {

      // var res = {
      //   "isRegistered": true,
      //   "tryOTP": null,
      //   "devices": null,
      //   "mob": "33-795"
      // }

      if (res) {
        if ((res['isRegistered']) && (!this.checkLimit(res['devices']))) {

          //assign login response into ionic storage
          this.storeSessionData();

          //Navigate into home page
          this.router.navigate(['/dashboard'], { replaceUrl: true });

        } else if ((!res['isRegistered']) && (!this.checkLimit(res['devices']))) {
          //if entered otp is incorrect
          this.otpInValid = true;
        } else if (this.checkLimit(res['devices'])) {
          //if device limit reached
          this.limitExceed = true;
        }
      } else {
        alert("went wrong");
      }
    }, (error => {
      alert("went wrong");
    }));
  }


  resendOTP() {
    this.canOTPResend = false;
    this.initiateOTPTimer();

    let device_id = uuidv4();
    if (device_id) {
      device_id = device_id.replace(/-/g, "");
    }

    this.subscription = this.api.sendOTP(this.userId, device_id).subscribe(res => {
      if (res) {
        this.otpInValid = false;
        this.limitExceed = false;
        this.formValueReset();
      } else {
        alert("went wrong");
      }
    }, (error => {
      alert("went wrong");
    }));
  }

  formValueReset() {
    this.OTPForm.controls["otp"].setValue('');
  }

  checkLimit(devices) {
    if (devices) {
      let device_count = devices.split(',');
      if (device_count.length == 3) {
        return true;
      }
    }
    return false;
  }


  storeSessionData() {
    //Store loggedin user information in local and global storage
    this.storageService.setLocalStorage(USER_INFO_KEY, this.userInfo);
    this.globalStorageService.userInfo = this.userInfo;

    //Store loggedin user id into local and global storage
    this.storageService.setLocalStorage(LID_KEY, this.userId);
    this.globalStorageService.userId = this.userId;

    //Storing user password in local and global storage service
    this.storageService.setLocalStorage(PWD_KEY, this.password);
    this.globalStorageService.password = this.password;
  }

  /**
  *  Angular lifecycle method: It will be invoked when user left this page
  * */
  ngOnDestroy() {
    //unsubscribe the login api subscription
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

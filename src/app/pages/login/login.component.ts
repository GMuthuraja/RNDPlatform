import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../core/services/utility.service';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { CUSTID_REGEX, SUCCESS, USER_INFO_KEY, PWD_KEY, LID_KEY } from '../../utils/constants';
import { EncryptionService } from '../../core/services/encryption.service';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { GlobalStorageService } from '../../core/services/global-storage.service';
import { RestApiService } from '../../core/http/rest-api.service';
import { retry } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


/**
 * Login page
 */
export class LoginComponent implements OnInit {

  /**
  * Class level variable declaration
  */
  loginForm: FormGroup;
  userId: any;
  subscription: any;
  userInfo: any;
  isLoginFormValid = true;

  constructor(
    private formBuilder: FormBuilder,
    private encryptService: EncryptionService,
    private api: RestApiService,
    private storageService: LocalStorageService,
    private globalStorageService: GlobalStorageService,
    private router: Router,
    public utilityService: UtilityService) { }

  ngOnInit(): void {
    //login formbuilder and formcontroller declaration
    this.initLoginForm();
  }

  /**
  * Initialize the login form
  */
  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      corpID: [
        "NDALCU2",
        Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(8), Validators.pattern(CUSTID_REGEX)])
      ],
      password: ["2YuNRXWV", Validators.required]
    });
  }

  /**
 * This method call when user manually entered usrname and password
 */
  manualLogin(form: NgForm) {
    //getting form values from html page and assigned to local variable
    let userId = form["corpID"];
    let password = form["password"];

    console.log(form);

    //if form values are empty then getting it from formBuilder of ngOnInit()
    if (!userId) {
      userId = this.loginForm.controls["corpID"].value;
      this.userId = this.loginForm.controls["corpID"].value;
    }

    //if form values are empty then getting it from formBuilder of ngOnInit()
    if (!password) {
      password = this.loginForm.controls["password"].value;
    }

    this.login(userId, password);
  }



  login(userId, password) {
    console.log(password);

    //Hiding validation error label
    this.isLoginFormValid = true;

    //Login API subscription starts
    this.subscription = this.api.login(userId, this.encryptService.encrypt(password)).pipe(retry(2)).subscribe(res => {
      console.log("login res : ", res);
      // Validating the response to ensure it not contain null or undefined
      if (this.utilityService.validateApiResponse(res)) {
        //Checking whether response is success or not
        if (res && res["message"][0].Status == SUCCESS) {
          // 's' for success and 'f' for failure

          //Validating User Info collection array not empty
          if (res["UserInfo"]) {

            //Hard coded
            //this.storeSessionData(res["UserInfo"], userId, password);
            //this.router.navigate(['/dashboard']);

            this.sendOTP(res["UserInfo"], userId, password);
          }
        } else {
          //showing validation error label
          this.isLoginFormValid = false;
        }
      } else {
        console.log("Validation : ", res);
      }
    }, (error => {
      alert("went wrong");
    }));
  }


  sendOTP(res, userId, password) {
    let device_id = uuidv4();

    if (device_id) {
      device_id = device_id.replace(/-/g, "");
    }

    console.log(device_id);

    this.api.sendOTP(userId, device_id).subscribe(response => {

      // var response = {
      //   "isRegistered": false,
      //   "tryOTP": null,
      //   "devices": null,
      //   "mob": "33-795"
      // }

      if (response) {
        if (response['isRegistered']) {

          //assign login response into local and global storage
          this.storeSessionData(res, userId, password);

          //Navigate into home page
          this.router.navigate(['/dashboard']);
        } else {
          console.log(password);
          //Constructing params to send next page
          let navigationExtras: NavigationExtras = {
            state: {
              user_info: res,
              user_id: userId,
              password: this.encryptService.encrypt(password)
            }
          };

          console.log(navigationExtras);

          //Navigate to OTP page with param values
          this.router.navigate(['/otp'], navigationExtras);
        }
      }
    }, (error => {
      alert("went wrong");
    }));
  }


  storeSessionData(userinfo, userid, password) {
    //Hiding validation error label
    this.isLoginFormValid = true;

    //Store loggedin user information in local and global storage
    this.storageService.setLocalStorage(USER_INFO_KEY, userinfo);
    this.globalStorageService.userInfo = userinfo;

    //Store loggedin user id into local and global storage
    this.storageService.setLocalStorage(LID_KEY, userid);
    this.globalStorageService.userId = userid;


    //Encrypt the password                
    let encryptedPassword = this.encryptService.encrypt(password);

    //Storing user password in local and global storage service
    this.storageService.setLocalStorage(PWD_KEY, password);
    this.globalStorageService.password = encryptedPassword;
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

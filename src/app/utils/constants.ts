import { environment } from 'src/environments/environment';

//Web API
export const BASE_URL = environment.BASE_URL;
export const LOGIN_URL = BASE_URL + '/login/login.aspx';
export const OTP_URL = "https://apps.saudiairlines.com/OTP/Default.aspx";

//Validation RegEx
export const CUSTID_REGEX = '^[a-zA-Z0-9 ]*$';

//Web API Literals
export const PASSCODE_VALUE = 's@v#';
export const SUCCESS = "s";
export const AUTH_TYPE = '-20';

//Web API Actions
export const SEND_OTP_ACTION = "check";
export const VERIFY_OTP_ACTION = "verify";

//Storage service key
export const USER_INFO_KEY = 'userinfo';
export const LID_KEY = 'LID';
export const PWD_KEY = 'password';

//Interceptor
export const CONTENT_TYPE = 'Content-Type';
export const CONTENT_TYPE_VALUE = 'application/x-www-form-urlencoded';


//Router Navigation
export const NAV_LOGIN = 'login';
export const NAV_OTP = 'otp';
export const NAV_DASHBOARD = 'dashboard';
export const NAV_BETA_HOME = '/dashboard/beta-home';
export const NAV_IDEAS_HOME = '/dashboard/ideas-home';
export const NAV_ESTAFF_HOME = '/dashboard/estaff-home';
export const NAV_EXP_HOME = '/dashboard/experiments-home';
export const NAV_NOTIFY_HOME = '/dashboard/notification-home';
export const NAV_BETA_USERS = '/dashboard/beta-users';
export const NAV_VIEW_ANALYTICS = '/dashboard/view-analytics';
export const NAV_ESTFF_RATINGS = '/dashboard/estaff-ratings';
export const NAV_SUGGESTIONS = '/dashboard/suggestions';
export const NAV_VIEW_EXP = '/dashboard/view-experiments';
export const NAV_NEW_EXP = '/dashboard/new-experiments';
export const NAV_USERS = '/dashboard/users';
export const NAV_SUMMARY = '/dashboard/summary';
export const NAV_EXP_RATINGS = '/dashboard/exp-ratings';
export const NAV_FEEDBACK = '/dashboard/feedback';
export const NAV_ADD_USER = '/dashboard/add-user';
export const NAV_STAFF_IDEAS = '/dashboard/staff-ideas';
export const NAV_VIEW_NOTIFICATION = '/dashboard/view-notification';
export const NAV_ADD_NOTIFICATION = '/dashboard/add-notification';



// Push Notification constant
// export const PUSH_MESSAGE = "";
// export const PUSH_TITLE = "eStaff";
export const PUSH_PLUGIN_ACTIVITY = "FCM_PLUGIN_ACTIVITY";
export const PUSH_SOUND = "default";
export const PUSH_ICON = "fcm_push_icon";
export const PUSH_SURVEY = "false";
export const PUSH_PRIORITY = "high";
export const FIREBASE_URL = 'https://fcm.googleapis.com/fcm/send'
export const FIREBASE_Authorization_KEY = 'key=AIzaSyDSdnPgzcVW9_-kH8v1c_BlkPI89dDZ300';
// export const FIREBASE_Authorization_KEY = 'key=AAAANp3rQPA:APA91bH-eihousDj2bnORYYDpnLmNlwTt6GdCZkHhG2AgKNMZpNO4H__pTx5hJ1FFQNh8t0Tj5VdSGdrN8QR3-XP3JNy_3LkCQ5PYoFbDinPpJWwHfBbzR5VFnkrqOSReN9fMNMAkL6s';
export const CONTENT_TYPE_JSON = "application/json";
export const RATING_URL = "https://apps.saudiairlines.com/OTP/Default.aspx";
// const RATING_URL = "assets/ratingresponse.json";
export const GET_RATES = "getRates";
export const CONTENT_TYPE_URL_ENCODED = "application/x-www-form-urlencoded";



export interface IdeaElement {
    staffName: string;
    payroll: string;
    Idea: string,
    AreaofIdea: string,
    description: string;
    expanded?: boolean;
}
export const Idea_DATA: IdeaElement[] = [
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        AreaofIdea: 'Operation',
        Idea: "The idea is provide a smarter and faster way of showing attendance recode by having access to......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        AreaofIdea: 'Cost',
        Idea: "The idea is provide a smarter and faster way of showing attendance recode by having access to......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        AreaofIdea: 'Revenue',
        Idea: "The idea is provide a smarter and faster way of showing attendance recode by having access to......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        AreaofIdea: 'Operation',
        Idea: "The idea is provide a smarter and faster way of showing attendance recode by having access to......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to ',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        AreaofIdea: 'Cost',
        Idea: "The idea is provide a smarter and faster way of showing attendance recode by having access to......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to ',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        AreaofIdea: 'Revenue',
        Idea: "The idea is provide a smarter and faster way of showing attendance recode by having access to......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to ',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        AreaofIdea: 'Operation',
        Idea: "The idea is provide a smarter and faster way of showing attendance recode by having access to......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        AreaofIdea: 'Cost',
        Idea: "The idea is provide a smarter and faster way of showing attendance recode by having access to......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to',
        expanded: false
    }
];

export const Filter = ['Operation', 'Cost', 'Revenue', 'Others']
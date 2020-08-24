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


export interface RatingElement {
    staffName: string;
    payroll: string;
    rate: number;
    comment: string;
    description: string;
    expanded?: boolean;
}

export interface SuggestionsElement {
    staffName: string;
    payroll: string;
    suggestions: string,
    description: string;
    expanded?: boolean;
}

export const RATINGS_DATA: RatingElement[] = [
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 4,
        comment: 'Great Job !',
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 4,
        comment: 'Great Job !',
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 5,
        comment: 'Great Job !',
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 3,
        comment: 'Test',
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 2,
        comment: 'We need more feature',
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 1,
        comment: 'I dont know',
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 5,
        comment: 'Great Job !',
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        rate: 4,
        comment: 'Great Job !',
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
    }
];

export const SUGGESTIONS_DATA: SuggestionsElement[] = [
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        suggestions: "My suggestion is to provide a smarter and faster way of showing attendance records by having access to sap services portal......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The',
        expanded: false
    }
];

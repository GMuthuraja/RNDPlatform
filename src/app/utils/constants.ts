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
        AreaofIdea:'Operation',
        Idea: "The idea is provide a smarter and faster way of showing attendance recode by having access to......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        AreaofIdea:'Cost',
        Idea: "The idea is provide a smarter and faster way of showing attendance recode by having access to......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        AreaofIdea:'Revenue',
        Idea: "The idea is provide a smarter and faster way of showing attendance recode by having access to......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        AreaofIdea:'Operation',
        Idea: "The idea is provide a smarter and faster way of showing attendance recode by having access to......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to ',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        AreaofIdea:'Cost',
        Idea: "The idea is provide a smarter and faster way of showing attendance recode by having access to......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to ',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        AreaofIdea:'Revenue',
        Idea: "The idea is provide a smarter and faster way of showing attendance recode by having access to......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to ',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        AreaofIdea:'Operation',
        Idea: "The idea is provide a smarter and faster way of showing attendance recode by having access to......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to',
        expanded: false
    },
    {
        staffName: "Majed Taha Ali",
        payroll: '11020229',
        AreaofIdea:'Cost',
        Idea: "The idea is provide a smarter and faster way of showing attendance recode by having access to......",
        description: 'The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to …The idea is provide a smarter and faster way of showing attendance recode by having access to',
        expanded: false
    }
];

export const Filter =['Operation','Cost','Revenue','Others']
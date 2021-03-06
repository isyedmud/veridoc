export const CATEGORIES = [
    "Cardiology",
    "Endocrinology",
    "Infectious Diseases",
    "Nephrology",
    "Oncology & Hematology",
    "Pediatrics",
    "Psychiatry",
    "Radiology",
    "Dermatology",
    "Gastroenterology",
    "Internal Medicine",
    "Neurology",
    "Precision Oncology",
    "Physical Med/Rehab",
    "Pulmonary Medicine and Critical Care",
    "Rheumatology",
    "I don't know"
];

/**
 * Payment option List
 */
// export const PAYMENTOPTIONS = [
//     "Debit Card",
//     "Credit Card",
//     "Paypal",
//     "Paytm"
// ];
export const PAYMENTOPTIONS = [
    {
        title: "Debit Card",
        image: "assets/imgs/img-master.png"
    },
    {
        title: "Credit Card",
        image: "assets/imgs/img-visa.png"
    },
    {
        title: "Paypal Card",
        image: "assets/imgs/img-pp.png"
    },
    {
        title: "Paytm",
        image: "assets/imgs/img-paytm.png"
    }
];

/**
 * Contact info for Veridoc
 */
export const CONTACTINFO = {
    email: "test@testemail.com",
    number: "+123456789"
};

/**
 * backend server url
 */
export const BACKENDURL = 'http://192.168.0.104:4200/api/v1';

/**
 * uploaded file path on backend server
 */
export const SERVERASSETS = 'http://192.168.0.104:4200/attachments/';

/**
 * Request status
 */
export const STATUS = [
    "Draft", // red
    "In Progress", // green
    "Provide Input", // blue
    "Completed",    // yellow
    "Closed"    // yellow
    // "Pending",
    // "In Progress",
    // "Closed"
];

/**
 * Terms and conditions text
 */
export const TERMSANDCONDITIONSTXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

/**
 * 0: open
 * 1: in progress
 * 2: aborted
 * 3: closed
 * 4: withdrawn
 */
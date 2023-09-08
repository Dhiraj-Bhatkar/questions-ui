const validationregex = {
  Min5Chars: {
    regex: /.{5,}/,
    errorMsg: "Should Min 5 chars",
  },
  Exact10Digits: {
    regex: /^[0-9]{10}$/,
    errorMsg: "Exactly 10 digits",
  },
  OnlyAlpha: {
    regex: /^[a-zA-Z]+$/,
    errorMsg: "Alphabets Only",
  },
  EmailFormat: {
    regex: /^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z]{2,5}\.[a-z]{2,3}$/,
    errorMsg: "Should be in the Email format",
  },
  OnlyDigits: {
    regex: /^[0-9]+$/,
    errorMsg: "Enter Digits Only",
  },
  SpecialCharsNotAllowed: {
    regex: /^[a-zA-Z0-9]+$/,
    errorMsg: "Special Chars Only",
  },
  SholdNotAllowSpaces: {
    regex: /^\S*$/,
    errorMsg: "Should not allow spaces",
  },
  Required: {
    regex: /./,
    errorMsg: "Please Enter value",
  },
  password: {
    regex: /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/,
    errorMsg: "Min 8 chars(min 1L,1U,1S,1D)",
  },
};

export const fnValidate = (inputObj) => {
  inputObj.errorMsg = "";
  const { value, criteria } = inputObj;
  for (let i = 0; i < criteria?.length; i++) {
    const { regex, errorMsg } = validationregex[criteria[i]];
    if (!regex.test(value || "")) {
      inputObj.errorMsg = errorMsg;
      break;
    }
  }
};

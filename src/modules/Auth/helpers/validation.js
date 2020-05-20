import isEmail from "validator/lib/isEmail";

function PasswordValidation(RegExp, message) {
  this.RegExp = RegExp;
  this.message = message;
}

const passMessTemp = "Password should contain";

let validationMap = [
  new PasswordValidation(
    new RegExp("(?=.*?[A-Z])"),
    `${passMessTemp} capital letters\n`
  ),
  new PasswordValidation(
    new RegExp("(?=.*?[a-z])"),
    `${passMessTemp} lowercase letters\n`
  ),
  new PasswordValidation(
    new RegExp("(?=.*?[0-9])"),
    `${passMessTemp} numbers\n`
  ),
  new PasswordValidation(
    new RegExp("(?=.[!@#$%^&])"),
    `${passMessTemp} special symbols\n`
  )
];

export const validateEmail = (errors, email) => {
  if (!isEmail(email)) errors.email = ["Invalid email"];
  return errors;
};

export const validate = ({ email, password, repeatPassword }) => {
  let errors = {};
  for (let i = 0, p = validationMap.length; i < p; i++) {
    if (!validationMap[i].RegExp.test(password)) {
      errors.password
        ? errors.password.push(validationMap[i].message)
        : (errors.password = [validationMap[i].message]);
    }
  }
  errors = validateEmail(errors, email);
  if (password !== repeatPassword)
    errors.repeatPassword = ["Passwords not match"];

  return errors;
};

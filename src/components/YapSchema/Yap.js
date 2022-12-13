import * as Yup from "yup";
const registorValidate = {
  username: Yup.string().min(0).required("Username is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase"
    ),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
};
const changeValidate = {
  oldPassword: Yup.string()
    .required("Old password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase"
    ),
  password: Yup.string()
    .required("New password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase"
    ),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm new password is required"),
};

const paymentValidate = {
  firstname: Yup.string().min(0).required("Firstname is required"),
  lastname: Yup.string().min(0).required("Lastname is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  phone: Yup.string().required("Phone no- is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  paymentMethod: Yup.string().required("Payment method is required"),
  cardNumber: Yup.string().required("card numbver is required"),
  date: Yup.string().required("date is required"),
};
export const registorSchema = Yup.object(registorValidate).required(true);
export const changePasswordSchema = Yup.object(changeValidate).required(true);
export const paymentSchema = Yup.object(paymentValidate).required(true);

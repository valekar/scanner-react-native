import * as Yup from "yup";
import $t from "../i18n/index";

export const logInValidationRules = Yup.object().shape({
  email: Yup.string()
    .required($t("validation.emailIsRequired"))
    .email($t("validation.mustBeValidEmail")),
  password: Yup.string()
    .required($t("validation.passwordIsRequired"))
    .min(8, $t("validation.passwordMinCharacters"))
});

export const registrationValidationRules = Yup.object().shape({
  email: Yup.string()
    .required($t("validation.emailIsRequired"))
    .email($t("validation.mustBeValidEmail")),
  confirm_email: Yup.string()
    .required($t("validation.emailIsRequired"))
    .email($t("validation.mustBeValidEmail"))
    .oneOf([Yup.ref("email"), null], $t("validation.emailMustMatch")),
  password: Yup.string()
    .required($t("validation.passwordIsRequired"))
    .min(8, $t("validation.passwordMinCharacters"))
});

export const forgotPasswordValidationRules = Yup.object().shape({
  email: Yup.string()
    .required($t("validation.emailIsRequired"))
    .email($t("validation.mustBeValidEmail"))
});

export const resetPasswordValidationRules = Yup.object().shape({
  password: Yup.string()
    .required($t("validation.passwordIsRequired"))
    .min(8, $t("validation.passwordMinCharacters")),
  password_confirmation: Yup.string()
    .required($t("validation.confirmPasswordIsRequired"))
    .min(8, $t("validation.confirmPasswordMinCharacters"))
    .oneOf([Yup.ref("password"), null], $t("auth.passwordsMustMatch"))
});

export const profileValidationRules = Yup.object().shape({
  first_name: Yup.string().required($t("validation.firstNameIsRequired")),
  last_name: Yup.string().required($t("validation.lastNameIsRequired"))
});

export const changePasswordValidationRules = Yup.object().shape({
  current_password: Yup.string()
    .required($t("validation.currentPasswordIsRequired"))
    .min(8, $t("validation.currentPasswordMinCharacters")),
  new_password: Yup.string()
    .required($t("validation.newPasswordIsRequired"))
    .min(8, $t("validation.newPasswordMinCharacters")),
  new_password_confirmation: Yup.string()
    .required($t("validation.newPasswordConfirmationIsRequired"))
    .min(8, $t("validation.newPasswordConfirmationMinCharacters"))
    .oneOf([Yup.ref("new_password"), null], $t("auth.passwordsMustMatch"))
});

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

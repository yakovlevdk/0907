import * as yup from "yup";

export const schema = () => {
  const RegEmail = /.+@.+\..+/;
  const RegPassword =
    /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;
  const fieldsSchema = yup.object().shape({
    email: yup
      .string()
      .required("Обязательное поле!")
      .matches(RegEmail, "Некорректный формат электронной почты."),

    password: yup
      .string()
      .required("Обязательное поле!")
      .matches(
        RegPassword,
        "Пароль должен иметь цифры, строчные, прописные, спец. символы и быть минимум 6 символов."
      ),
    repeatPassword: yup
      .string()
      .required("Обязательное поле!")
      .oneOf([yup.ref("password"), null], "Пароли не совпадают!"),
  });
  return fieldsSchema;
};

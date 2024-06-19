import * as yup from "yup";
export const fieldsSchema = yup.object().shape({
  email: yup
    .string()
    .required("Обязательное поле!")
    .matches(
      /^[^s@]+@[^s@]+.[^s@]+$/,
      "Некорректный формат электронной почты."
    ),

  password: yup
    .string()
    .required("Обязательное поле!")
    .matches(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
      "Пароль должен иметь цифры, строчные, прописные, спец. символы."
    ),
  repeatPassword: yup
    .string()
    .required("Обязательное поле!")
    .oneOf([yup.ref("password"), null], "Пароли не совпадают"),
});

import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./app.module.css";
import { Header } from "./Components/Header/Header";

const fieldsSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Некорректный формат электронной почты."
    ),
  password: yup
    .string()
    .matches(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
      "Пароль должен иметь цифры, строчные, прописные, спец. символы."
    ),
  repeatPassword: yup
    .string()
    .required("Повторите пароль")
    .oneOf([yup.ref("password"), null], "Пароли не совпадают"),
});

export const Form = () => {
  const submitButton = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    resolver: yupResolver(fieldsSchema),
  });

  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;
  const repeatPasswordError = errors.repeatPassword?.message;
  const sendData = (object) => {
    console.log(object);
  };
  const onSubmit = () => {
    const { email, password, repeatPassword } = getValues();
    sendData({ email, password, repeatPassword });
  };
  useEffect(() => {
    const { repeatPassword, password } = getValues();
    if (repeatPassword !== "" && repeatPassword === password) {
      submitButton.current.focus();
    }
  }, [getValues]);
  return (
    <div className={styles.container}>
      <div className={styles["registration-form"]}>
        <div className="header">
          <Header />
        </div>
        <div className={styles["form-field"]}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className={styles["email-input"]}
              name="email"
              type="email"
              placeholder="Введите почту"
              {...register("email")}
            ></input>
            {emailError && <p className={styles.error}>{emailError}</p>}
            <input
              className={styles["password-input"]}
              name="password"
              type="password"
              placeholder="Введите пароль"
              {...register("password")}
            ></input>
            {passwordError && <p className={styles.error}>{passwordError}</p>}
            <input
              className={styles["password-input"]}
              name="repeat-password"
              type="password"
              placeholder="Повторите пароль"
              {...register("repeatPassword")}
            ></input>
            {repeatPasswordError && (
              <p className={styles.error}>{repeatPasswordError}</p>
            )}

            <button
              ref={submitButton}
              type="submit"
              className={styles["register-button"]}
              disabled={
                passwordError || emailError || repeatPasswordError || false
              }
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

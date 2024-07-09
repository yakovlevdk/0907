import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./app.module.css";
import { Header } from "./Components/Header/Header";
import { schema } from "./Components/schema";
import { Button } from "./Components/submitButton";
import { Input } from "./Components/Input";
const sendData = (object) => {
  console.log(object);
};
export const Form = () => {
  const submitButton = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema()),
  });
  const { email, repeatPassword, password } = getValues();
  const onSubmit = () => {
    const { email, password, repeatPassword } = getValues();
    sendData({ email, password, repeatPassword });
  };

  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;
  const repeatPasswordError = errors.repeatPassword?.message;
  const isError =
    emailError || passwordError || repeatPasswordError
      ? styles["container-error"]
      : styles["container-not-error"];
  useEffect(() => {
    if (repeatPassword !== "" && repeatPassword === password && email !== "") {
      submitButton.current.focus();
    }
  }, [email, password, repeatPassword]);
  return (
    <div className={styles.container + " " + isError}>
      <div className={styles["registration-form"]}>
        <div className="header">
          <Header />
        </div>
        <div className={styles["form-field"]}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register}
              name="email"
              type="text"
              placeholder="Введите почту"
              error={emailError}
            ></Input>
            <Input
              register={register}
              name="password"
              type="password"
              placeholder="Введите пароль"
              error={passwordError}
            ></Input>
            <Input
              register={register}
              name="repeatPassword"
              type="password"
              placeholder="Повторите пароль"
              error={repeatPasswordError}
            ></Input>
            <Button
              ref={submitButton}
              passwordError={passwordError}
              emailError={emailError}
              repeatPasswordError={repeatPasswordError}
              title="Зарегистрироваться"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./app.module.css";
import { Header } from "./Components/Header/Header";
import { schema } from "./Components/schema";
import { Button } from "./Components/submitButton";
import { Inputs } from "./Components/Inputs";
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
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
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
            <Inputs
              submitButton={submitButton}
              emailError={emailError}
              passwordError={passwordError}
              repeatPassword={repeatPassword}
              register={register}
              repeatPasswordError={repeatPasswordError}
            />
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

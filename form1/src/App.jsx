import { useRef, useEffect, useState } from "react";
import "./App.css";
import styles from "./app.module.css";
import { EmailField } from "./Components/EmailField/EmailField";
import { PasswordsField } from "./Components/PasswordsField/PasswordsField";
import { Header } from "./Components/Header/Header";
import { RepeatPasswordsField } from "./Components/RepeatPasswordField/RepeatPassword";

export const Form = () => {
  const submitButton = useRef(null);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [repeatPasswordError, setRepeatPasswordError] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState("");
  const sendData = (object) => {
    console.log(object);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    sendData({ email, password, repeatPassword });
  };
  useEffect(() => {
    if (repeatPassword !== "" && repeatPassword === password) {
      submitButton.current.focus();
    }
  }, [email, password, repeatPassword]);
  return (
    <div className={styles.container}>
      <div className={styles["registration-form"]}>
        <div className="header">
          <Header />
        </div>
        <div className={styles["form-field"]}>
          <form onSubmit={onSubmit}>
            <EmailField
              emailError={emailError}
              setEmailError={setEmailError}
              email={email}
              setEmail={setEmail}
            />
            <PasswordsField
              passwordError={passwordError}
              setPasswordError={setPasswordError}
              password={password}
              setPassword={setPassword}
            />
            <RepeatPasswordsField
              repeatPassword={repeatPassword}
              setRepeatPassword={setRepeatPassword}
              password={password}
              setPassword={setPassword}
              repeatPasswordError={repeatPasswordError}
              setRepeatPasswordError={setRepeatPasswordError}
              submitButton={submitButton}
            />
            <button
              ref={submitButton}
              type="submit"
              className={styles["register-button"]}
              disabled={
                emailError || passwordError || repeatPasswordError || false
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

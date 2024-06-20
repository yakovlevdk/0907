import styles from "../app.module.css";
export const Inputs = (props) => {
  const isEmailError = props.emailError
    ? styles["error-input"]
    : styles["accept-input"];
  const isPasswordError = props.passwordError
    ? styles["error-input"]
    : styles["accept-input"];
  const isRepeatPasswordError = props.repeatPasswordError
    ? styles["error-input"]
    : styles["accept-input"];
  return (
    <>
      <input
        className={styles["email-input"] + " " + isEmailError}
        name="email"
        type="email"
        placeholder="Введите почту"
        {...props.register("email")}
      />
      {props.emailError && <p className={styles.error}>{props.emailError}</p>}
      <input
        className={styles["password-input"] + " " + isPasswordError}
        name="password"
        type="password"
        placeholder="Введите пароль"
        {...props.register("password")}
      />
      {props.passwordError && (
        <p className={styles.error}>{props.passwordError}</p>
      )}
      <input
        className={styles["password-input"] + " " + isRepeatPasswordError}
        name="repeat-password"
        type="password"
        placeholder="Повторите пароль"
        {...props.register("repeatPassword")}
      />
      {props.repeatPasswordError && (
        <p className={styles.error}>{props.repeatPasswordError}</p>
      )}
    </>
  );
};

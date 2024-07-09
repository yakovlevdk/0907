import styles from "../app.module.css";
export const Input = (props) => {
  const isError = props.error ? styles["error-input"] : styles["accept-input"];
  //   const isPasswordError = props.passwordError
  //     ? styles["error-input"]
  //     : styles["accept-input"];
  //   const isRepeatPasswordError = props.repeatPasswordError
  //     ? styles["error-input"]
  //     : styles["accept-input"];
  return (
    <>
      <input
        className={" " + isError}
        type={props.type}
        placeholder={props.placeholder}
        {...props.register(`${props.name}`)}
        name={props.name}
      />
      {props.error && <p className={styles.error}>{props.error}</p>}
      {/* <input
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
      )} */}
    </>
  );
};

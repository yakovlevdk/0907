import styles from "./passwordsfield.module.css";
export const PasswordsField = (props) => {
  const changePassword = ({ target }) => {
    props.setPassword(target.value);
    if (
      !/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/.test(
        target.value
      )
    ) {
      props.setPasswordError(
        "Пароль должен иметь цифры, строчные, прописные, спец. символы."
      );
    } else {
      props.setPasswordError(null);
    }
  };

  return (
    <>
      <input
        className={styles["password-input"]}
        name="password"
        type="password"
        placeholder="Введите пароль"
        value={props.password}
        onChange={changePassword}
      ></input>
      {props.passwordError && (
        <p className={styles.error}>{props.passwordError}</p>
      )}
    </>
  );
};

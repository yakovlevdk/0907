import styles from "./RepeatPassword.module.css";
export const RepeatPasswordsField = (props) => {
  const changeRepeatPassword = ({ target }) => {
    props.setRepeatPassword(target.value);

    if (target.value !== props.password) {
      props.setRepeatPasswordError("Пароли не совпадают.");
    } else {
      props.setRepeatPasswordError(null);
    }
    if (target.value.length === 15) {
      props.submitButton.current.focus();
      console.log(props.submitButton.current.focus);
    }
  };

  return (
    <>
      <input
        className={styles["password-input"]}
        name="repeatpassword"
        type="password"
        placeholder="Повторите пароль"
        value={props.repeatPassword}
        onChange={changeRepeatPassword}
      ></input>
      {props.repeatPasswordError && (
        <p className={styles.error}>{props.repeatPasswordError}</p>
      )}
    </>
  );
};

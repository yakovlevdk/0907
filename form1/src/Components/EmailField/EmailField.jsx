import styles from "./EmailField.module.css";
export const EmailField = (props) => {
  const changeEmail = ({ target }) => {
    props.setEmail(target.value);
    if (!target.value.includes("@") || !target.value.includes(".")) {
      props.setEmailError("Некорректный формат электронной почты");
    } else {
      props.setEmailError(null);
    }
  };

  return (
    <>
      <input
        className={styles["email-input"]}
        name="email"
        type="email"
        placeholder="Введите почту"
        value={props.email}
        onChange={changeEmail}
      ></input>
      {props.emailError && <p className={styles.error}>{props.emailError}</p>}
    </>
  );
};

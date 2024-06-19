import styles from "./header.module.css";
export const Header = () => {
  return (
    <>
      <h1 className={styles.headerH}>Регистрация</h1>
      <p className={styles.headerP}>
        Для регистрации необходимо ввести следующие поля:{" "}
      </p>
    </>
  );
};

import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <h1 className={styles.heading}>TODO APP</h1>
      <p>This todo application is open-source and free to use</p>
    </>
  );
}

export default Header;

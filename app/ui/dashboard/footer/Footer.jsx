import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Kholiavkoi Dev</div>
      <div className={styles.text}>&copy; All rights reserved.</div>
    </div>
  );
};

export default Footer;

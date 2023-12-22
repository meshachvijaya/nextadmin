import styles from "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Meshach Vijaya</div>
      <div className={styles.text}>{currentYear} All Rights Reserved</div>
    </div>
  );
};

export default Footer;

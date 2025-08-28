import React from "react";
import styles from "./HeroSection.module.scss";
import DHLVanUrl from '../../assets/images/DHLVan.png'

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.textTop}>DELIVERING</h1>
      <img
        src={DHLVanUrl} // replace with your van image path
        alt="DHL Van"
        className={styles.van}
      />
      <h1 className={styles.textBottom}>EXCELLENCE</h1>
    </section>
  );
};

export default HeroSection;

import React from "react";
import styles from "./Navbar.module.scss";
import ArrowForward from "../../assets/svgs/arrow_forward.svg";
import DHLLogoUrl from "../../assets/images/DHLLogo.png"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* Left - Logo */}
      <div className={styles.logo}>
        <img
          src={DHLLogoUrl}
          alt="DHL Logo"
          className={styles.logoImage}
        />
      </div>

      {/* Center - Menu */}
      <div className={styles.menu}>
        <span className={styles.menuItem}>TRACK</span>
        <span className={styles.menuItem}>SHIP</span>
        <span className={styles.menuItem}>ENTERPRISES LOGISTICS SERVICES</span>
        <span className={styles.menuItem}>CUSTOMER SERVICE</span>
      </div>

      {/* Right - Button */}
      <div className={styles.right}>
        <button className={styles.portalBtn}>
          CUSTOMER PORTAL LOGINS <ArrowForward className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

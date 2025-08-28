import React from "react";
import styles from "./TopBar.module.scss";
import Search from "../../assets/svgs/Search.svg";
import Pages from "../../assets/svgs/Pages.svg";
import StoreFront from "../../assets/svgs/storefront.svg";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.rightSection}>
        <div className={styles.item}>
          <StoreFront className={styles.icon} />
          <span>Find a Service Point</span>
        </div>
        <div className={styles.item}>
          <Search className={styles.icon} />
          <span>Search</span>
        </div>
        <div className={styles.item}>
          <Pages className={styles.icon} />
          <span>India</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

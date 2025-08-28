import React from "react";
import styles from "./ActionTiles.module.scss";
import BusinessIcon from '../../assets/svgs/business.svg';
import CalendarIcon from '../../assets/svgs/calendar_today.svg';
import RequestQuoteIcon from '../../assets/svgs/request_quote.svg';

const ActionTiles = () => {
  return (
    <div className={styles.container}>
      {/* Track Shipment */}
      <div className={`${styles.tile} ${styles.trackTile}`}>
        <h3 className={styles.title}>TRACK YOUR SHIPMENT</h3>
        <p className={styles.text}>
          Need the status of your shipment or proof of delivery? Enter your
          tracking number or reference number below.
        </p>
        <div className={styles.trackInputWrapper}>
          <input
            type="text"
            placeholder="Enter your tracking number(s)"
            className={styles.input}
          />
          <button className={styles.trackBtn}>
            Track <span className={styles.arrow}>↘</span>
          </button>
        </div>
      </div>

      {/* Ship Now */}
      <div className={styles.tile}>
        <CalendarIcon />
        <div>
            <h3 className={styles.title}>SHIP NOW</h3>
            <p className={styles.text}>Find the right services</p>
        </div>
      </div>

      {/* Get a Quote */}
      <div className={styles.tile}>
        <RequestQuoteIcon />
        <div>
            <h3 className={styles.title}>GET A QUOTE</h3>
            <p className={styles.text}>Estimate cost to share and compare</p>
        </div>
      </div>

      {/* Request Business Account */}
      <div className={styles.tile}>
        <BusinessIcon />
        <div>
            <h3 className={styles.title}>REQUEST A BUSINESS ACCOUNT</h3>
            <p className={styles.text}>
                Shipping regularly or frequently? Learn about volume discounts
            </p>
        </div>
      </div>
    </div>
  );
};

export default ActionTiles;

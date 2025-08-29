import React, { useState } from 'react';
import styles from './ShipNowSection.module.scss';
import usflag from '../../assets/images/US_Flag.png';

const ShipNowSection = () => {
  const [userType, setUserType] = useState('private');
  const [fromCountry, setFromCountry] = useState('United States of America');
  const [toCountry, setToCountry] = useState('United States of America');
  const [isResidential, setIsResidential] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <h1>SHIP NOW</h1>
        <p>
          If you’re planning to send a package or ship items overseas, knowing the cost in advance
          can save you time and hassle. With our easy-to-use DHL cost calculator, you can quickly
          get an instant estimate tailored to your shipment details. Whether it’s for personal or
          business needs, this tool helps you plan your shipping budget with confidence.
        </p>
      </div>

      <div className={styles.right}>
        <div className={styles.card}>
          <div className={styles.tabs}>
            <button
              className={userType === 'private' ? styles.active : ''}
              onClick={() => setUserType('private')}
            >
              PRIVATE PERSON
            </button>
            <button
              className={userType === 'business' ? styles.active : ''}
              onClick={() => setUserType('business')}
            >
              BUSINESS
            </button>
          </div>

          <div className={styles.formGroup}>
            <label>FROM</label>
            <div className={styles.dropdown}>
              <div className={styles.dropdownOption} role="img" aria-label="flag"><img src={usflag} alt="Description" /> {toCountry}</div>
            </div>
            <small>This is your billing Country/Region</small>
          </div>

          <div className={styles.formGroup}>
            <label>TO</label>
            <div className={styles.dropdown}>
              <div className={styles.dropdownOption} role="img" aria-label="flag"><img src={usflag} alt="Description" /> {toCountry}</div>
            </div>
            <div className={styles.checkbox}>
                <input
                type="checkbox"
                id="residential"
                checked={isResidential}
                onChange={() => setIsResidential(!isResidential)}
                />
                <label htmlFor="residential">This is the Residential Address</label>
            </div>
          </div>

          <button className={styles.submitBtn}>
            DESCRIBE YOUR SHIPMENT <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShipNowSection;

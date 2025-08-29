import React from 'react';
import styles from './ShippingCostInfo.module.scss';

const ShippingCostInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>
          HOW MUCH DOES IT <br /> COST TO MAIL <br /> PACKAGES?
        </h1>
      </div>
      <div className={styles.description}>
        <p>
          The cost of DHL shipping depends on several factors, including the size and weight of the
          package, the delivery speed, and the destination. If you’re wondering how much it costs to
          send a package, DHL provides online tools like the cost calculator to help you get an
          accurate price before booking. It’s a simple way to budget, no matter if you’re
          organizing a cross-border delivery or curious about the cost of shipping a small package
          across town.
        </p>
      </div>
    </div>
  );
};

export default ShippingCostInfo;

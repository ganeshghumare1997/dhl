import React from 'react';
import styles from './ShipNowPage.module.scss';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ShippingCostInfo from '../components/ShippingCostInfo/ShippingCostInfo';

const ShipNowPage = () => {
  return (
    <div>
        <div className={styles.hero}>
          <div className={styles.gradient}></div>
          <Header />
          <ShippingCostInfo />
        </div>
        <Footer />
    </div>
  )
};

export default ShipNowPage;

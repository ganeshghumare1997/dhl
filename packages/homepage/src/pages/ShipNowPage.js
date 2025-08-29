import React from 'react';
import styles from './ShipNowPage.module.scss';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ShippingCostInfo from '../components/ShippingCostInfo/ShippingCostInfo';
import CostCalculator from '../components/CostCalculator/CostCalculator';
import ShipNowSection from '../components/ShipNowSection/ShipNowSection';

const ShipNowPage = () => {
  return (
    <div>
        <div className={styles.hero}>
          <div className={styles.gradient}></div>
          <Header />
          <ShipNowSection />
          <ShippingCostInfo />
        </div>
        <div style={{ padding: '5rem' }}>
          <CostCalculator />
        </div>
        <Footer />
    </div>
  )
};

export default ShipNowPage;

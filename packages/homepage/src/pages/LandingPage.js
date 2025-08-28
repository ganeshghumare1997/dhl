import React from 'react'
import Footer from '../components/Footer/Footer';
import ImportantServiceUpdates from '../components/ImportantServiceUpdates/ImportantServiceUpdates';
import Services from '../components/Services/Services';
import ShippingOptions from '../components/ShippingOptions/ShippingOptions';
import BusinessDescription from '../components/BusinessDescription/BusinessDescription';
import ActionTiles from '../components/ActionTiles/ActionTiles';
import HeroSection from '../components/HeroSection/HeroSection';
import Header from '../components/Header/Header';
import styles from './LandingPage.module.scss';

const LandingPage = () => {
  return (
    <div>
        <div className={styles.hero}>
          <div className={styles.gradient}></div>
          <Header />
          <HeroSection />
          <ActionTiles />
          <BusinessDescription />
        </div>
        <div style={{ padding: '5rem' }}>
          <Services />
          <ShippingOptions />
          <ImportantServiceUpdates />
        </div>
        <Footer />
    </div>
  )
};

export default LandingPage;

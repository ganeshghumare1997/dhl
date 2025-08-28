import React from 'react'
import Footer from '../components/Footer/Footer';
import ImportantServiceUpdates from '../components/ImportantServiceUpdates/ImportantServiceUpdates';
import Services from '../components/Services/Services';
import ShippingOptions from '../components/ShippingOptions/ShippingOptions';

const LandingPage = () => {
  return (
    <div>
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

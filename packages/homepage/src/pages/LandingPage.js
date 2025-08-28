import React from 'react'
import Footer from '../components/Footer/Footer';
import ImportantServiceUpdates from '../components/ImportantServiceUpdates/ImportantServiceUpdates';
import Services from '../components/Services/Services';

const LandingPage = () => {
  return (
    <div>
        <div style={{ padding: '5rem' }}>
          <Services />
          <ImportantServiceUpdates />
        </div>
        <Footer />
    </div>
  )
};

export default LandingPage;

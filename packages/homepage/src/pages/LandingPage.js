import React from 'react'
import Footer from '../components/Footer/Footer';
import ImportantServiceUpdates from '../components/ImportantServiceUpdates/ImportantServiceUpdates';

const LandingPage = () => {
  return (
    <div>
        <div style={{ padding: '5rem' }}>
          <ImportantServiceUpdates />
        </div>
        <Footer />
    </div>
  )
};

export default LandingPage;

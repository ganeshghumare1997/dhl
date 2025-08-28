import React from 'react';
import styles from './BusinessDescription.module.scss';
import { ArrowUpRight } from "lucide-react";

const BusinessDescription = () => {
  return (
      <section className={styles.businessDescription}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Power your small and medium-sized business success with world-class shipping and logistics. Our team of experts can help you address the ever changing need of your customers.
          </h2>
          <button className={styles.ctaButton}>
            <span>Explore Our Business Solutions</span>
            <ArrowUpRight className={styles.icon} />
          </button>
        </div>
      </section>
  )
}

export default BusinessDescription

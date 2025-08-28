import React from 'react';
import styles from './Services.module.scss';
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  return (
      <section className={styles.services}>
        <div className={styles.content}>
          <div className={styles.topGrid}>
            {/* What we offered */}
            <div className={styles.leftColumn}>
              <h2 className={styles.servicesHeading}>
                ALL logistics services
              </h2>
            </div>
            <div className={styles.rightColumn}>
              <p className={styles.description}>
                We provide a full cycle of international transportation and logistics — including refrigerated, liquid, hazardous, and pharmaceutical cargo — with full control at every stage.
              </p>
              <button className={styles.viewAllBtn}>
                <span>View All Services</span>
                <ArrowUpRight className={styles.icon} />
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Services

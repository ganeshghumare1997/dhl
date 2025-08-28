import React from 'react';
import styles from './ImportantServiceUpdates.module.scss';
import { ArrowUpRight } from "lucide-react";
import sustainabilityImage from '../../assets/images/Sustainability.png';
import InnovationImage from '../../assets/images/Innovation.png';
import DHLTradeVanImage from '../../assets/images/DHLTradeVan.png';
import DHLTradePlaneImage from '../../assets/images/DHLTradePlane.png';

const ImportantServiceUpdates = () => {
  return (
    <section className={styles.updates}>
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.leftColumn}>
              <h2 className={styles.updatesHeading}>
                Important Service Updates
              </h2>
            </div>
            <div className={styles.rightColumn}>
                <p className={styles.updatesDescription}>
                    Service bulletins keep you up to date with news and alerts
                </p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.leftColumn}>
              {/* Sustainability Section */}
                <div>
                    <img src={sustainabilityImage} alt="Sustainability" />
                    <div className={styles.sustainabilitySection}>
                        <div className={styles.sustainabilityBadge}>
                                Sustainability
                        </div>
                        <p className={styles.sustainabilityDescription}>
                            As one of the world's leading logistics companies, we strive to be at the forefront of sustainability in the logistics industry.
                        </p>
                        <button className={styles.sustainabilityBtn}>
                            <span>Read More</span>
                            <ArrowUpRight className={styles.icon} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.rightColumn}>
                <div className={styles.newsItems}>
                {/* News Items */}
                {[
                  { category: "Innovation", title: "Read More", imageUrl: InnovationImage },
                  { category: "DHL Trade Atlas 2025", title: "Read More", imageUrl: DHLTradeVanImage },
                  { category: "DHL Trade Atlas 2025", title: "Read More", imageUrl: DHLTradePlaneImage },
                ].map((item, index) => (
                  <div key={index} className={styles.newsItem}>
                    <span className={styles.newsImage}>
                        <img src={item.imageUrl} alt={item.category} />
                    </span>
                    <span>
                        <div className={styles.categoryBadge}>
                            {item.category}
                        </div>
                        <p className={styles.newsDescription}>
                        As one of the world's leading logistics companies, we strive to be at the forefront of sustainability...
                        </p>
                        <button className={styles.readMoreBtn}>
                            <span>{item.title}</span>
                            <ArrowUpRight className={styles.icon} />
                        </button>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ImportantServiceUpdates

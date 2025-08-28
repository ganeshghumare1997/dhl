import React from 'react';
import styles from './Footer.module.scss';
import FacebookIcon from '../../assets/svgs/Facebook.svg';
import TwitterIcon from '../../assets/svgs/Twitter.svg';
import InstagramIcon from '../../assets/svgs/Instagram.svg';

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.content}>
            <div className={styles.footerGrid}>
              <div className={styles.footerColumn}>
                <h5 className={styles.columnHeading}>Quick Links</h5>
                <div className={styles.linkList}>
                  {["Customer Service", "Customer Portal Logins", "Developer Portal", "Get a Quote"].map((link) => (
                    <a key={link} href="#" className={styles.footerLink}>
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              <div className={styles.footerColumn}>
                <h5 className={styles.columnHeading}>Our Divisions</h5>
                <div className={styles.linkList}>
                  {["DHL Express", "DHL Global Forwarding", "DHL Supply Chain", "Other Global Divisions"].map((link) => (
                    <a key={link} href="#" className={styles.footerLink}>
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              <div className={styles.footerColumn}>
                <h5 className={styles.columnHeading}>Industry Sectors</h5>
                <div className={styles.linkList}>
                  {["Auto-Mobility", "Energy", "Engineering and Manufacturing", "Life Sciences and Healthcare"].map((link) => (
                    <a key={link} href="#" className={styles.footerLink}>
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              <div className={styles.footerColumn}>
                <h5 className={styles.columnHeading}>Company Information</h5>
                <div className={styles.linkList}>
                  {["About DHL", "Delivered", "Careers", "Press Center"].map((link) => (
                    <a key={link} href="#" className={styles.footerLink}>
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.content}>
            <div className={styles.bottomFlex}>
              <p className={styles.copyright}>
                2025 © - all rights reserved
              </p>
              <div className={styles.socialIcons}>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

import React, { useState } from "react";
import styles from "./ShippingOptions.module.scss";
import docParcelUrl from "../../assets/images/doc-parcel.png";
import retailerUrl from "../../assets/images/retailer.png";
import cargoUrl from "../../assets/images/cargo.png";
import enterpriseUrl from "../../assets/images/enterprise.png";

const options = [
  {
    id: 1,
    title: "DOCUMENT AND PARCEL SHIPPING",
    subtitle: "FOR ALL SHIPPERS",
    description:
      "Learn about DHL Express – the undisputed global leader in international express shipping.",
    image: docParcelUrl,
    features: [
      "Next Possible Business Day",
      "Tailored Business Solutions",
      "Flexible Import/Export Options",
      "Wide Variety of Optional Services",
    ],
  },
  {
    id: 2,
    title: "RETAILER OR VOLUME SHIPPING",
    subtitle: "",
    image: retailerUrl,
  },
  {
    id: 3,
    title: "CARGO SHIPPING",
    subtitle: "",
    image: cargoUrl,
  },
  {
    id: 4,
    title: "ENTERPRISE LOGISTICS SERVICES",
    subtitle: "",
    image: enterpriseUrl,
  },
];

const ShippingOptions = () => {
  const [active, setActive] = useState(1);

  return (
    <div className={styles.container}>
      {options.map((opt) => (
        <div
          key={opt.id}
          className={`${styles.panel} ${
            active === opt.id ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${opt.image})` }}
          onMouseEnter={() => setActive(opt.id)}
        >
          <div className={styles.overlay}>
            {active === opt.id && (
              <div className={styles.content}>
                {opt.subtitle && <span className={styles.subtitle}>{opt.subtitle}</span>}
                <h2 className={styles.title}>{opt.title}</h2>
                {opt.description && <p className={styles.description}>{opt.description}</p>}
                {opt.features && (
                  <ul className={styles.features}>
                    {opt.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
          <div className={styles.arrow}>↘</div>
        </div>
      ))}
    </div>
  );
};

export default ShippingOptions;

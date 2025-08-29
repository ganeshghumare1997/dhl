import React, { useState } from 'react';
import styles from './CostCalculator.module.scss';
import CheckSvg from '../../assets/svgs/Check.svg';
import ArrowForward from '../../assets/svgs/arrow_forward.svg';

const CostCalculator = () => {
  const [shippingMethod, setShippingMethod] = useState('Land');
  const [goodsType, setGoodsType] = useState('Select');
  const [dimensions, setDimensions] = useState({ length: '', height: '', width: '' });
  const [fromCountry, setFromCountry] = useState('');
  const [fromCity, setFromCity] = useState('');
  const [toCountry, setToCountry] = useState('');
  const [toCity, setToCity] = useState('');

  const handleEstimate = () => {
    alert('Estimate button clicked!');
  };

  return (
    <div className={styles.container}>
      <div className={styles.steps}>
        <h2>HOW TO USE THE DHL COST CALCULATOR</h2>
        <ul>
          <li>
            <div className={styles.checkmark}><CheckSvg /></div>
            <div>
                <div className={styles.itemHeading}>
                    Select “Private Person” as the Sender Type
                </div>
                <p>This is to indicate you’re shipping as an individual rather than a business.</p>
            </div>
          </li>
          <li>
            <div className={styles.checkmark}><CheckSvg /></div> 
            <div>
                <div className={styles.itemHeading}>
                    Enter Shipping Details
                </div>
                <p>Fill in the required information, including the origin and destination countries or ZIP codes.</p>
            </div>
          </li>
          <li>
            <div className={styles.checkmark}><CheckSvg /></div>
            <div>
                <div className={styles.itemHeading}>
                    Provide Package Information
                </div>
                <p>Enter the weight and dimensions of your package to help calculate accurate costs.</p>
            </div>
          </li>
          <li>
            <div className={styles.checkmark}><CheckSvg /></div>
            <div>
                <div className={styles.itemHeading}>
                    Click “Ship Now”
                </div>
                <p>Once all details are entered, click the “Ship Now” button to find out how much it costs to send your package.</p>
            </div>
          </li>
          <li>
            <div className={styles.checkmark}><CheckSvg /></div>
            <div>
                <div className={styles.itemHeading}>
                    View Cost and Delivery Estimates
                </div>
                <p>The tool will display the estimated cost of shipping with DHL along with approximate transit times.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.form}>
        <h3>Shipping Method</h3>
        <div className={styles.shippingMethod}>
          <button
            className={shippingMethod === 'Land' ? styles.active : ''}
            onClick={() => setShippingMethod('Land')}
          >
            Land
          </button>
          <button
            className={shippingMethod === 'Air' ? styles.active : ''}
            onClick={() => setShippingMethod('Air')}
          >
            Air
          </button>
          <button
            className={shippingMethod === 'Sea' ? styles.active : ''}
            onClick={() => setShippingMethod('Sea')}
          >
            Sea
          </button>
        </div>

        <div className={styles.locationFields}>
            <div className={styles.formGroup}>
                <label>Type of goods</label>
                <select value={goodsType} onChange={(e) => setGoodsType(e.target.value)}>
                    <option value="Select">Select</option>
                    <option value="Weight">Weight</option>
                    <option value="Volume">Volume</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label>Type of goods</label>
                <select value={goodsType} onChange={(e) => setGoodsType(e.target.value)}>
                    <option value="Select">Select</option>
                    <option value="Weight">Weight</option>
                    <option value="Volume">Volume</option>
                </select>
            </div>
        </div>

        <div className={styles.formGroup}>
          <label>Dimensions</label>
          <div className={styles.dimensionFields}>
            <input
              type="text"
              placeholder="Length"
              value={dimensions.length}
              onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
            />
            <input
              type="text"
              placeholder="Height"
              value={dimensions.height}
              onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
            />
            <input
              type="text"
              placeholder="Width"
              value={dimensions.width}
              onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
            />
          </div>
        </div>

        <div className={styles.locationFields}>
          <div className={styles.formGroup}>
            <label>From</label>
            <select
              type="text"
              placeholder="Country"
              value={fromCountry}
              onChange={(e) => setFromCountry(e.target.value)}
            >
                <option value="">Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
            </select>
            <select
              type="text"
              placeholder="City"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            >
                <option value="">City</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Houston">Houston</option>
                <option value="Phoenix">Phoenix</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>To</label>
            <select
              type="text"
              placeholder="Country"
              value={toCountry}
              onChange={(e) => setToCountry(e.target.value)}
            >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
            </select>
            <select
              type="text"
              placeholder="City"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
            >
                <option value="">Select City</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Houston">Houston</option>
                <option value="Phoenix">Phoenix</option>
            </select>
          </div>
        </div>

        <button className={styles.estimateButton} onClick={handleEstimate}>
          Estimate <span><ArrowForward /></span>
        </button>
      </div>
    </div>
  );
};

export default CostCalculator;

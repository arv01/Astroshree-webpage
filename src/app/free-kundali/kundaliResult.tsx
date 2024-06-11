"use client"
import React from 'react';
import styles from '../free-kundali/KundaliResult.module.css';

const KundaliResult = () => {
  return (
    <div className={styles.kundaliResult}>
      <h2>Kundali Result</h2>
      <div className={styles.kundaliDetails}>
        <h3>Basic Details</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Praveen</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>01/01/1990</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>03:22 PM</td>
            </tr>
            <tr>
              <td>Place</td>
              <td>Noida, Uttar Pradesh, India</td>
            </tr>
            <tr>
              <td>Latitude</td>
              <td>28.58</td>
            </tr>
            <tr>
              <td>Longitude</td>
              <td>77.33</td>
            </tr>
            <tr>
              <td>Timezone</td>
              <td>GMT+5.5</td>
            </tr>
            <tr>
              <td>Sunrise</td>
              <td>7:13:36</td>
            </tr>
            <tr>
              <td>Sunset</td>
              <td>17:34:56</td>
            </tr>
            <tr>
              <td>Ayanamsha</td>
              <td>23.71738</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.kundaliDetails}>
        <h3>Panchang Details</h3>
        <table>
          <tbody>
            <tr>
              <td>Tithi</td>
              <td>ShuklaPanchami</td>
            </tr>
            <tr>
              <td>Karan</td>
              <td>Bav</td>
            </tr>
            <tr>
              <td>Yog</td>
              <td>Siddhi</td>
            </tr>
            <tr>
              <td>Nakshatra</td>
              <td>Shatabhisha</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.kundaliDetails}>
        <h3>Avakhada Details</h3>
        <table>
          <tbody>
            <tr>
              <td>Varna</td>
              <td>Vaishya</td>
            </tr>
            <tr>
              <td>Vashya</td>
              <td>Nara</td>
            </tr>
            <tr>
              <td>Yoni</td>
              <td>Ashva</td>
            </tr>
            <tr>
              <td>Gan</td>
              <td>Rakshasa</td>
            </tr>
            <tr>
              <td>Nadi</td>
              <td>Adhya</td>
            </tr>
            <tr>
              <td>Sign</td>
              <td>Aquarius</td>
            </tr>
            <tr>
              <td>Sign Lord</td>
              <td>Saturn</td>
            </tr>
            <tr>
              <td>Nakshatra-Charan</td>
              <td>Shatabhisha</td>
            </tr>
            <tr>
              <td>Yog</td>
              <td>Siddhi</td>
            </tr>
            <tr>
              <td>Karan</td>
              <td>Bav</td>
            </tr>
            <tr>
              <td>Tithi</td>
              <td>ShuklaPanchami</td>
            </tr>
            <tr>
              <td>Yunja</td>
              <td>Antya</td>
            </tr>
            <tr>
              <td>Tatva</td>
              <td>Air</td>
            </tr>
            <tr>
              <td>Name alphabet</td>
              <td>Go</td>
            </tr>
            <tr>
              <td>Paya</td>
              <td>Copper</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KundaliResult;

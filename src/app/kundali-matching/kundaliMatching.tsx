"use client";
import React, { useState } from 'react';
import styles from '../kundali-matching/kundali.module.css';

type FormDataKey = 'name' | 'gender' | 'day' | 'month' | 'year' | 'hour' | 'minute' | 'second' | 'placeOfBirth';

const KundaliMatching = () => {
  const [boyFormData, setBoyFormData] = useState<Record<FormDataKey, string>>({
    name: '',
    gender: 'male',
    day: '',
    month: '',
    year: '',
    hour: '',
    minute: '',
    second: '',
    placeOfBirth: ''
  });

  const [girlFormData, setGirlFormData] = useState<Record<FormDataKey, string>>({
    name: '',
    gender: 'female',
    day: '',
    month: '',
    year: '',
    hour: '',
    minute: '',
    second: '',
    placeOfBirth: ''
  });

  const handleBoyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBoyFormData(prevData => ({
      ...prevData,
      [name as FormDataKey]: value
    }));
  };

  const handleGirlChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setGirlFormData(prevData => ({
      ...prevData,
      [name as FormDataKey]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const boyRequiredFields: FormDataKey[] = ["name", "day", "month", "year", "hour", "minute", "placeOfBirth"];
    const girlRequiredFields: FormDataKey[] = ["name", "day", "month", "year", "hour", "minute", "placeOfBirth"];

    for (let field of boyRequiredFields) {
      if (!boyFormData[field]) {
        alert(`Please fill in all required fields for the boy's details`);
        return;
      }
    }

    for (let field of girlRequiredFields) {
      if (!girlFormData[field]) {
        alert(`Please fill in all required fields for the girl's details`);
        return;
      }
    }

    try {
      const response = await fetch('/api/kundaliMatching', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ boyFormData, girlFormData })
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 101 }, (_, i) => new Date().getFullYear() - i);
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  const seconds = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className={styles.body}>
      <div className={styles.formContainer}>
        <h1 className={styles.formTitle}>Fill Up Partner's Detail</h1>
        <form onSubmit={handleSubmit} className={styles.kundaliForm}>
          <div className={styles.horizontalForms}>
            <div className={styles.singleForm}>
              <div className={styles.detailTitle}>Boy's Details</div>
              <div className={styles.formGroup}>
                <label htmlFor="boyName">Name*</label>
                <input
                  type="text"
                  id="boyName"
                  name="name"
                  value={boyFormData.name}
                  onChange={handleBoyChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Birth Details*</label>
                <div className={styles.birthDetails}>
                  <select
                    id="boyDay"
                    name="day"
                    value={boyFormData.day}
                    onChange={handleBoyChange}
                    required
                  >
                    <option value="">Day</option>
                    {days.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select
                    id="boyMonth"
                    name="month"
                    value={boyFormData.month}
                    onChange={handleBoyChange}
                    required
                  >
                    <option value="">Month</option>
                    {months.map((month, index) => (
                      <option key={month} value={index + 1}>{month}</option>
                    ))}
                  </select>
                  <select
                    id="boyYear"
                    name="year"
                    value={boyFormData.year}
                    onChange={handleBoyChange}
                    required
                  >
                    <option value="">Year</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Birth Time*</label>
                <div className={styles.birthTime}>
                  <select
                    id="boyHour"
                    name="hour"
                    value={boyFormData.hour}
                    onChange={handleBoyChange}
                    required
                  >
                    <option value="">Hour</option>
                    {hours.map(hour => (
                      <option key={hour} value={hour}>{hour}</option>
                    ))}
                  </select>
                  <select
                    id="boyMinute"
                    name="minute"
                    value={boyFormData.minute}
                    onChange={handleBoyChange}
                    required
                  >
                    <option value="">Minute</option>
                    {minutes.map(minute => (
                      <option key={minute} value={minute}>{minute}</option>
                    ))}
                  </select>
                  <select
                    id="boySecond"
                    name="second"
                    value={boyFormData.second}
                    onChange={handleBoyChange}
                    required
                  >
                    <option value="">Second</option>
                    {seconds.map(second => (
                      <option key={second} value={second}>{second}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="boyPlaceOfBirth">Place of Birth*</label>
                <input
                  type="text"
                  id="boyPlaceOfBirth"
                  name="placeOfBirth"
                  value={boyFormData.placeOfBirth}
                  onChange={handleBoyChange}
                  required
                />
              </div>
            </div>
            <div className={styles.singleForm}>
              <div className={styles.detailTitle}>Girl's Details</div>
              <div className={styles.formGroup}>
                <label htmlFor="girlName">Name*</label>
                <input
                  type="text"
                  id="girlName"
                  name="name"
                  value={girlFormData.name}
                  onChange={handleGirlChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Birth Details*</label>
                <div className={styles.birthDetails}>
                  <select
                    id="girlDay"
                    name="day"
                    value={girlFormData.day}
                    onChange={handleGirlChange}
                    required
                  >
                    <option value="">Day</option>
                    {days.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select
                    id="girlMonth"
                    name="month"
                    value={girlFormData.month}
                    onChange={handleGirlChange}
                    required
                  >
                    <option value="">Month</option>
                    {months.map((month, index) => (
                      <option key={month} value={index + 1}>{month}</option>
                    ))}
                  </select>
                  <select
                    id="girlYear"
                    name="year"
                    value={girlFormData.year}
                    onChange={handleGirlChange}
                    required
                  >
                    <option value="">Year</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Birth Time*</label>
                <div className={styles.birthTime}>
                  <select
                    id="girlHour"
                    name="hour"
                    value={girlFormData.hour}
                    onChange={handleGirlChange}
                    required
                  >
                    <option value="">Hour</option>
                    {hours.map(hour => (
                      <option key={hour} value={hour}>{hour}</option>
                    ))}
                  </select>
                  <select
                    id="girlMinute"
                    name="minute"
                    value={girlFormData.minute}
                    onChange={handleGirlChange}
                    required
                  >
                    <option value="">Minute</option>
                    {minutes.map(minute => (
                      <option key={minute} value={minute}>{minute}</option>
                    ))}
                  </select>
                  <select
                    id="girlSecond"
                    name="second"
                    value={girlFormData.second}
                    onChange={handleGirlChange}
                    required
                  >
                    <option value="">Second</option>
                    {seconds.map(second => (
                      <option key={second} value={second}>{second}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="girlPlaceOfBirth">Place of Birth*</label>
                <input
                  type="text"
                  id="girlPlaceOfBirth"
                  name="placeOfBirth"
                  value={girlFormData.placeOfBirth}
                  onChange={handleGirlChange}
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit" className={styles.submitButton}>Match Horoscope</button>
        </form>
      </div>
    </div>
  );
};

export default KundaliMatching;

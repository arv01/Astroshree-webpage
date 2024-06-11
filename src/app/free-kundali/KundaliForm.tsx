"use client"
import React, { useState } from 'react';
import styles from '../free-kundali/kundali.module.css';

const KundaliForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    day: '',
    month: '',
    year: '',
    hour: '',
    minute: '',
    second: '',
    placeOfBirth: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, gender, day, month, year, hour, minute, placeOfBirth } = formData;
    if (!name || !gender || !day || !month || !year || !hour || !minute || !placeOfBirth) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      const response = await fetch('/api/kundali', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
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
    
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Free Kundali</h1>
      <form onSubmit={handleSubmit} className={styles.kundaliForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="gender">Gender*</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Birth Details*</label>
          <div className={styles.birthDetails}>
            <select
              id="day"
              name="day"
              value={formData.day}
              onChange={handleChange}
              required
            >
              <option value="">Day</option>
              {days.map(day => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
            <select
              id="month"
              name="month"
              value={formData.month}
              onChange={handleChange}
              required
            >
              <option value="">Month</option>
              {months.map((month, index) => (
                <option key={month} value={index + 1}>{month}</option>
              ))}
            </select>
            <select
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
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
              id="hour"
              name="hour"
              value={formData.hour}
              onChange={handleChange}
              required
            >
              <option value="">Hour</option>
              {hours.map(hour => (
                <option key={hour} value={hour}>{hour}</option>
              ))}
            </select>
            <select
              id="minute"
              name="minute"
              value={formData.minute}
              onChange={handleChange}
              required
            >
              <option value="">Minute</option>
              {minutes.map(minute => (
                <option key={minute} value={minute}>{minute}</option>
              ))}
            </select>
            <select
              id="second"
              name="second"
              value={formData.second}
              onChange={handleChange}
            >
              <option value="">Second</option>
              {seconds.map(second => (
                <option key={second} value={second}>{second}</option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="placeOfBirth">Place of Birth*</label>
          <input
            type="text"
            id="placeOfBirth"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Generate Kundali</button>
      </form>
    </div>
  );
};

export default KundaliForm;


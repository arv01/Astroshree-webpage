import React from 'react';
import styles from './KundaliMatchingForm.module.css';

const KundaliMatchingForm: React.FC = () => {
  return (
    <form className={styles.kundaliMatchingForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name1">Name of Partner 1</label>
        <input type="text" id="name1" name="name1" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="birthdate1">Birthdate of Partner 1</label>
        <input type="date" id="birthdate1" name="birthdate1" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="birthplace1">Birthplace of Partner 1</label>
        <input type="text" id="birthplace1" name="birthplace1" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="name2">Name of Partner 2</label>
        <input type="text" id="name2" name="name2" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="birthdate2">Birthdate of Partner 2</label>
        <input type="date" id="birthdate2" name="birthdate2" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="birthplace2">Birthplace of Partner 2</label>
        <input type="text" id="birthplace2" name="birthplace2" required />
      </div>
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default KundaliMatchingForm;

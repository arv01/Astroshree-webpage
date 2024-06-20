"use client";
import React from 'react';
import styles from './GreetingsPage.module.css';


const GreetingsPage: React.FC = () => {
  return (
    <div>
      <section className={styles.section}>
        <h1>Namaste Explorer</h1>
        <p>Welcome & explore the Astrological world of AstroShree</p>
      </section>
    </div>
  );
};

export default GreetingsPage;

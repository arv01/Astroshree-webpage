"use client"
import React, { useState } from "react";
import styles from "../chat-with-astrologer/Astrologers.module.css";
import { astrologers } from "../../data/astrologersData";
import defaultProfileImage from "../../../public/Assets/priya.jpg";
import { FiFilter } from "react-icons/fi"; // Import filter icon from react-icons/fi
import Header from "../Common/Header";
import Footer from "../Common/Footer/Footer";
import Image from 'next/image';
const AstrologersPage: React.FC = () => {
  const [filters, setFilters] = useState({
    name: "",
    language: "",
    rating: "",
    specialty: "",
    popularity: "",
    gender: "",
    experience: "",
    price: ""
  });

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [viewFullImage, setViewFullImage] = useState<string | null>(null); // Corrected state type

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({
      name: "",
      language: "",
      rating: "",
      specialty: "",
      popularity: "",
      gender: "",
      experience: "",
      price: ""
    });
  };

  const filteredAstrologers = astrologers
    .filter((astrologer) => {
      return (
        (filters.name === "" || astrologer.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (filters.language === "" || astrologer.languages.some(language => language.toLowerCase().includes(filters.language.toLowerCase()))) &&
        (filters.rating === "" || astrologer.rating >= parseFloat(filters.rating)) &&
        (filters.specialty === "" || astrologer.specialties.some(specialty => specialty.toLowerCase().includes(filters.specialty.toLowerCase()))) 
        // (filters.gender === "" || astrologer.gender.toLowerCase() === filters.gender.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (filters.price) {
        return filters.price === "lowToHigh" ? a.chatRate.discounted - b.chatRate.discounted : b.chatRate.discounted - a.chatRate.discounted;
      }
      return 0;
    });

  return (
    <div>
      <Header />
      <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredAstrologers.map((astrologer, index) => (
            <div key={index} className={styles.astrologerCard}>
              <div className={`${styles.profileSection} ${styles[astrologer.status]}`}>
                <div className={styles.profileImageContainer} onClick={() => setViewFullImage(astrologer.profileImage)}>
                  <Image
                    src={astrologer.profileImage}
                    alt={astrologer.name}
                    width={110}
                    height={110}
                    className={styles.profileImage}
                  />
                  <div className={styles.rating}>Rating: {astrologer.rating}</div>
                </div>
              </div>
              <div className={styles.detailsSection}>
                <h2 className={styles.name}>{astrologer.name}</h2>
                <p className={styles.specialties}>{astrologer.specialties.join(", ")}</p>
                <p className={styles.languages}>{astrologer.languages.join(", ")}</p>
                <p>{astrologer.experience} , {astrologer.consultations}</p>
                <button className={styles.chatButton}>
                  Chat Now @ ₹<span style={{color: '#999999', textDecoration: 'line-through'}}>{astrologer.chatRate.original}</span> ₹{astrologer.chatRate.discounted}/min
                </button>
              </div>
            </div>
          ))}
        </div>
        {viewFullImage && (
          <div className={styles.modalOverlay} onClick={() => setViewFullImage(null)}>
            <div className={styles.modalContent}>
              <Image src={viewFullImage} alt="Full Profile Image" />
            </div>
          </div>
        )}
      </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AstrologersPage;
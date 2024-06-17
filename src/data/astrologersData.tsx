
import love from "../../public/Assets/love.png";
import priya from "../../public/Assets/priya.jpg";
import ankit from "../../public/Assets/ankit_pic.jpg";
import Surya from "../../public/Assets/Surya_pic.jpg";
import ramesh from "../../public/Assets/Ramesh_pic.jpg";
import sanjay from "../../public/Assets/Sanjay_pic.jpg";
import maya from "../../public/Assets/Maya_pic.jpg";
import kartik from "../../public/Assets/Kartik_pic.jpg";
import neha from "../../public/Assets/Neha_pic.jpg";
import rahul from "../../public/Assets/Rahul_pic.jpg";
import shreya from "../../public/Assets/Shreya_pic.jpg";
import arjun from "../../public/Assets/Arjun_pic.jpg";
import pooja from "../../public/Assets/Pooja_pic.jpg";
import vishal from "../../public/Assets/Vishal_pic.jpg";
import aarti from "../../public/Assets/Aarti_pic.jpg";
export const astrologers = [
    {
      name: "Astro Ankit",
      rating: 4.82,
      specialties: ["Love", "Career", "Health", "Business"],
      experience: "5+ years",
      consultations: "6472+ Consults",
      skills: ["Face Reading", "Palmistry", "Vedic Astro"],
      languages: ["Hindi", "English"],
      chatRate: { original: 18, discounted: 1 },
      gender:"Male",
      popularity:"",
      experiences:5,
      profileImage: ankit.src,
      specialtyIcons: ["love_icon.png", "career_icon.png", "health_icon.png", "business_icon.png"],
      status: "online"
    },
    {
      name: "Astro Surya",
      rating: 4.78,
      specialties: ["Love", "Career", "Health", "Business"],
      experience: "3+ years",
      consultations: "6149+ Consults",
      skills: ["Face Reading", "Palmistry", "Vedic Astro"],
      languages: ["Hindi", "English"],
      chatRate: { original: 15, discounted: 1 },
      profileImage: Surya.src,
      specialtyIcons: ["love_icon.png", "career_icon.png", "health_icon.png", "business_icon.png"],
      status: "offline"
    },
    {
      name: "Astro Ramesh",
      rating: 4.92,
      specialties: ["Love", "Career", "Health"],
      experience: "8+ years",
      consultations: "8123+ Consults",
      skills: ["Vedic Astrology", "Numerology"],
      languages: ["English", "Hindi", "Tamil"],
      chatRate: { original: 22, discounted: 20 },
      profileImage: ramesh.src,
      specialtyIcons: ["love_icon.png", "career_icon.png", "health_icon.png"],
      status: "online"
    },
    {
      name: "Astro Priya",
      rating: 4.85,
      specialties: ["Love", "Career", "Finance"],
      experience: "10+ years",
      consultations: "9876+ Consults",
      skills: ["Vedic Astrology", "Palmistry"],
      languages: ["English", "Hindi"],
      chatRate: { original: 25, discounted: 22 },
      profileImage: priya.src,
      specialtyIcons: ["love_icon.png", "career_icon.png", "finance_icon.png"],
      status: "busy"
    },
    {
      name: "Astro Sanjay",
      rating: 4.79,
      specialties: ["Career", "Finance"],
      experience: "15+ years",
      consultations: "7500+ Consults",
      skills: ["Western Astrology", "Vedic Astrology"],
      languages: ["English"],
      chatRate: { original: 20, discounted: 18 },
      profileImage: sanjay.src,
      specialtyIcons: ["career_icon.png", "finance_icon.png"],
      status: "online"
    },
    {
      name: "Astro Maya",
      rating: 4.88,
      specialties: ["Love", "Career"],
      experience: "12+ years",
      consultations: "8321+ Consults",
      skills: ["Western Astrology"],
      languages: ["English", "Spanish"],
      chatRate: { original: 19, discounted: 15 },
      profileImage: maya.src,
      specialtyIcons: ["love_icon.png", "career_icon.png"],
      status: "offline"
    },
    {
      name: "Astro Kartik",
      rating: 4.76,
      specialties: ["Career", "Finance"],
      experience: "6+ years",
      consultations: "5643+ Consults",
      skills: ["Vedic Astrology", "Numerology"],
      languages: ["English", "Hindi"],
      chatRate: { original: 23, discounted: 20 },
      profileImage: kartik.src,
      specialtyIcons: ["career_icon.png", "finance_icon.png"],
      status: "busy"
    },
    {
      name: "Astro Neha",
      rating: 4.90,
      specialties: ["Love", "Health"],
      experience: "7+ years",
      consultations: "7032+ Consults",
      skills: ["Palmistry", "Western Astrology"],
      languages: ["English", "Hindi"],
      chatRate: { original: 18, discounted: 15 },
      profileImage: neha.src,
      specialtyIcons: ["love_icon.png", "health_icon.png"],
      status: "online"
    },
    {
      name: "Astro Rahul",
      rating: 4.83,
      specialties: ["Love", "Career"],
      experience: "9+ years",
      consultations: "6821+ Consults",
      skills: ["Vedic Astrology"],
      languages: ["Hindi", "English", "Tamil"],
      chatRate: { original: 20, discounted: 18 },
      profileImage: rahul.src,
      specialtyIcons: ["love_icon.png", "career_icon.png"],
      status: "online"
    },
    {
      name: "Astro Shreya",
      rating: 4.75,
      specialties: ["Career", "Health"],
      experience: "4+ years",
      consultations: "5234+ Consults",
      skills: ["Face Reading", "Vedic Astrology"],
      languages: ["English", "Hindi"],
      chatRate: { original: 17, discounted: 14 },
      profileImage: shreya.src,
      specialtyIcons: ["career_icon.png", "health_icon.png"],
      status: "offline"
    },
    {
      name: "Astro Arjun",
      rating: 4.81,
      specialties: ["Career", "Finance"],
      experience: "11+ years",
      consultations: "7564+ Consults",
      skills: ["Western Astrology", "Numerology"],
      languages: ["English", "Hindi"],
      chatRate: { original: 21, discounted: 18 },
      profileImage: arjun.src,
      specialtyIcons: ["career_icon.png", "finance_icon.png"],
      status: "busy"
    },
    {
      name: "Astro Pooja",
      rating: 4.87,
      specialties: ["Love", "Health"],
      experience: "6+ years",
      consultations: "6432+ Consults",
      skills: ["Spiritual Astrology", "Palmistry"],
      languages: ["English", "Hindi"],
      chatRate: { original: 19, discounted: 16 },
      profileImage: pooja.src,
      specialtyIcons: ["love_icon.png", "health_icon.png"],
      status: "online"
    },
    {
      name: "Astro Vishal",
      rating: 4.84,
      specialties: ["Career", "Finance"],
      experience: "8+ years",
      consultations: "7198+ Consults",
      skills: ["Vedic Astrology", "Palmistry"],
      languages: ["English", "Hindi"],
      chatRate: { original: 24, discounted: 20 },
      profileImage: vishal.src,
      specialtyIcons: ["career_icon.png", "finance_icon.png"],
      status: "online"
    },
    {
      name: "Astro Aarti",
      rating: 4.79,
      specialties: ["Love", "Career"],
      experience: "5+ years",
      consultations: "6098+ Consults",
      skills: ["Western Astrology", "Vedic Astrology"],
      languages: ["English", "Hindi"],
      chatRate: { original: 18, discounted: 15 },
      profileImage:aarti.src,
      specialtyIcons: ["love_icon.png", "career_icon.png"],
      status: "offline"
    }
  ];
  
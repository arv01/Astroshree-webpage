// src/pages/api/horoscopes.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const horoscopes = [
    { sign: 'Aries', prediction: 'Today is a good day for new beginnings.' },
    { sign: 'Taurus', prediction: 'Focus on your personal relationships today.' },
    { sign: 'Gemini', prediction: 'You may face some challenges, but you can overcome them.' },
    { sign: 'Cancer', prediction: 'Take time for self-care and relaxation.' },
    { sign: 'Leo', prediction: 'Your confidence will shine through today.' },
    { sign: 'Virgo', prediction: 'Pay attention to the details in your work.' },
    { sign: 'Libra', prediction: 'Balance is key in all your endeavors today.' },
    { sign: 'Scorpio', prediction: 'Trust your instincts and intuition.' },
    { sign: 'Sagittarius', prediction: 'Adventure and new experiences await you.' },
    { sign: 'Capricorn', prediction: 'Hard work will bring you closer to your goals.' },
    { sign: 'Aquarius', prediction: 'Embrace your creativity and unique ideas.' },
    { sign: 'Pisces', prediction: 'Your empathy and compassion will be appreciated.' },
  ];

  res.status(200).json(horoscopes);
};

export default handler;

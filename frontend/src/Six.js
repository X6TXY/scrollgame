import React, { useEffect, useState } from 'react';
import './Six.css';

export const Six = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className={`bye h-screen w-screen ${isVisible ? 'fadeIn' : ''}`}>
        <h1 className={`bye text-6xl ${isVisible ? 'fadeIn' : ''}`}>Всем спасибо за внимание!!!</h1>
        <h2 className={`bye text-4xl flex justify-center mt-10 font-bold ${isVisible ? 'fadeIn' : ''}`}>Our sponsor:</h2>
        <p className={`bye text-2xl font-medium mt-2 ${isVisible ? 'fadeIn' : ''}`}>Queen Dalida and SuperStar Aidana</p>
        <p className={`bye text-2xl font-medium mt-2 ${isVisible ? 'fadeIn' : ''}`}>NFACTORIAL SCHOOL and Chevron</p>
        <p className={`bye text-2xl font-medium mt-2 ${isVisible ? 'fadeIn' : ''}`}>Dodo pizza</p>
        <p className={`bye text-2xl font-medium mt-2 ${isVisible ? 'fadeIn' : ''}`}>Ernar Bekbolat and OSIT</p>
        <p className={`bye text-2xl font-medium mt-2 ${isVisible ? 'fadeIn' : ''}`}>Зургамбаев Бахредин</p>
        <p className={`bye text-2xl font-medium mt-2 ${isVisible ? 'fadeIn' : ''}`}>Менторы</p>
        <p className={`bye text-2xl font-medium mt-2 ${isVisible ? 'fadeIn' : ''}`}>Адиль</p>
        <p className={`bye text-2xl font-medium mt-2 ${isVisible ? 'fadeIn' : ''}`}>Бэкендер агай</p>
        <p className={`bye text-2xl font-medium mt-2 ${isVisible ? 'fadeIn' : ''}`}>Можно было очень много кого написать но мы не успели</p>
        <a href='/fifth' className={`butt2 text-8xl flex justify-center items-center ${isVisible ? 'fadeIn' : ''}`}> ⇚</a>
      </div>
    </div>
  );
};

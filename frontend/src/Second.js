import React, { useEffect, useState } from 'react';
import img3 from './assets/3.png';
import './second.css';

export const Second = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className={`h-screen w-screen flex justify-center ${isVisible ? 'fadeIn' : ''}`}>
        <div className={`rect31 bg-white drop-shadow-sm ${isVisible ? 'fadeIn' : ''}`}>
          <h1 className={`rect31 flex justify-center items-center text-2xl ${isVisible ? 'fadeIn' : ''}`}>История первого заработка</h1>
        </div>
        <div className={`rect32 drop-shadow-sm ${isVisible ? 'fadeIn' : ''}`}>
          <h2 className={`text31 bg-white text-xl font-medium ${isVisible ? 'fadeIn' : ''}`}>Легенда и его начало</h2>
          <p className={`text32 bg-white flex justify-center items-center ${isVisible ? 'fadeIn' : ''}`}>
            Итак, уважаемый Бахрат продолжал свое увлечение необычными и невероятными приключениями в Караколтыке. В один из таких дней, гуляя по городу, он столкнулся с овальным предметом и нечаянно разбил его головой. Открылась жидкость, которую он решил попробовать, и оказалось, что это был мед. Бахрат сразу увидел в этом потенциал для заработка. Он начал продавать этот мед, и это стало его первым источником дохода. Люди были впечатлены качеством меда, и Бахрат нашел свою нишу в этой предпринимательской сфере. Параллельно с этим, Бахрат привлек внимание Ернара Бекболата, руководителя лейбла ОСИТ, который сильно верил в музыкальные способности Бахрата. Ернар решил подписать с ним контракт, увидев его потенциал и талант. И вот, представляю вашему вниманию его первый трек с лейблом ОСИТ. Таким образом, Бахрат Нуртас продолжал свои успехи как предприниматель и музыкант, непрерывно впечатляя окружающих своими достижениями и талантом. Также Бахредин любит разъезжать на своей машине по Аль-Фараби. Под свой же трек, он настолько себя любит, что слушает трек 24/7.
          </p>
        </div>
        <img src={img3} alt="million" className={`img3 ${isVisible ? 'fadeIn' : ''}`} />
        <div className={`tut ${isVisible ? 'fadeIn' : ''}`}>Тут Бахредин катается ---→</div>
        <div className={`tut2 ${isVisible ? 'fadeIn' : ''}`}>←--- Тут Бахредин катается</div>
        <a className={`rect33 hover:bg-red-950 ${isVisible ? 'fadeIn' : ''}`} href="https://almuhkz.itch.io/aramed">
          <h3 className={`butt flex justify-center items-center text-2xl text-white hover:bg-red-950 ${isVisible ? 'fadeIn' : ''}`}>Играть</h3>
        </a>
      </div>
      <a href="/thrid" className={`butt1  hover:bg-yellow-500 text-8xl flex justify-center items-center ${isVisible ? 'fadeIn' : ''}`}> ⇛</a>
      <ul className={`step3 steps ${isVisible ? 'fadeIn' : ''}`}>
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
        <li className="step"></li>
        <li className="step "></li>
        <li className="step "></li>
      </ul>
      <a href="/first" className={`butt2 hover:bg-yellow-500 text-8xl flex justify-center items-center ${isVisible ? 'fadeIn' : ''}`}> ⇚</a>
    </div>
  );
};

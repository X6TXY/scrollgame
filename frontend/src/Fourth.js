import React, { useEffect, useState } from 'react';
import img5 from './assets/5.png';
import './Fourth.css';

export const Fourth = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className={`h-screen w-screen flex justify-center ${isVisible ? 'fadeIn' : ''}`}>
        <div className={`rect51 bg-white drop-shadow-sm ${isVisible ? 'fadeIn' : ''}`}>
          <h1 className={`rect51 flex justify-center items-center text-2xl ${isVisible ? 'fadeIn' : ''}`}>Много обещающее будущее</h1>
        </div>
        <div className={`rect52 ${isVisible ? 'fadeIn' : ''}`}>
          <h2 className={`text41 bg-white text-xl font-medium ${isVisible ? 'fadeIn' : ''}`}>После заката наступает рассвет</h2>
          <p className={`text42 bg-white flex justify-center items-center ${isVisible ? 'fadeIn' : ''}`}>
            Бахредин Зургамбаевтас, будучи молодым и талантливым студентом, всегда чувствовал притяжение к музыке. В свободное время он изучал различные музыкальные инструменты и писал свои собственные мелодии. Его музыкальный талант не остался незамеченным друзьями и однажды, на студенческой вечеринке, Бахредин решил сыграть небольшой концерт для своих товарищей.
            Его выступление оказалось невероятно впечатляющим и захватывающим. Зал оживился, и все присутствующие не могли оторваться от звуков, которые создавал Бахредин своим гитарным аккомпанементом и потрясающим вокалом. Он перенес всех в мир своих эмоций и музыкальной гармонии.
            После этого вечера Бахредин осознал, что его настоящая страсть – музыка. Он принял решение отложить все другие занятия и полностью посвятить себя музыкальному искусству. Бахредин начал посещать музыкальные школы и курсы, чтобы улучшить свои навыки игры на гитаре и развить свой вокал.
          </p>
        </div>
      </div>
      <img src={img5} alt="fight club" className={`img5 ${isVisible ? 'fadeIn' : ''}`} />
      <a href="/fifth" className={`butt1 text-8xl hover:bg-yellow-500 flex justify-center items-center ${isVisible ? 'fadeIn' : ''}`}>
        ⇛
      </a>
      <ul className={`step2 steps ${isVisible ? 'fadeIn' : ''}`}>
      <a href='/main'><li className="step step-primary " ></li></a>
        <a href='/first'><li className="step step-primary " ></li></a>
        <a href='/second'><li className="step step-primary " ></li></a>
        <a href='/thrid'><li className="step step-primary " ></li></a>
        <a href='/four'><li className="step step-primary " ></li></a>
        <a href='/fifth'><li className="step  " ></li></a>
      </ul>
      <a href="/thrid" className={`butt2 hover:bg-yellow-500 text-8xl flex justify-center items-center ${isVisible ? 'fadeIn' : ''}`}>
        ⇚
      </a>
    </div>
  );
};

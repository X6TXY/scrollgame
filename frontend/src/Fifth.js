import React, { useEffect, useState } from 'react';
import img6 from './assets/6.jpg';
import './Fifth.css';

export const Fifth = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className={`h-screen w-screen flex justify-center text-black ${isVisible ? 'fadeIn' : ''}`}>
        <div className={`rectf bg-white drop-shadow-sm animate-fade-in ${isVisible ? 'fadeIn' : ''}`}>
          <h1 className={`rectf bg-white flex justify-center items-center text-2xl animate-slide-in ${isVisible ? 'fadeIn' : ''}`}>
            Заслуженный отдых
          </h1>
        </div>
        <div className={`rect11 drop-shadow-sm animate-slide-in h-60 ${isVisible ? 'fadeIn' : ''}`}>
          <h2 className={`text11 bg-white text-xl font-medium ${isVisible ? 'fadeIn' : ''}`}>Настоящее время</h2>
          <p className={`text22 bg-white flex justify-center items-center animate-fade-in ${isVisible ? 'fadeIn' : ''}`}>
            В настоящее время Бахредин Зургамбаев занят тоями.То есть выступления на тоях.Также многие считают Бахредина Зургамбаева очень смешным человеком и делают про него мемы.Сейчас он стал домоседом и начал заниматься домашними делами.В нынешнее Бахредин занимается тем ,что истребляет плохие мемы.Вы можете это посмотреть в нашей мини игре "Великий против".
          </p>
        </div>
        <img src={img6} alt='nast' className={`img6 h-2/3 ${isVisible ? 'fadeIn' : ''}`}></img>
      </div>
      <a href='/six' className={`butt1 text-8xl flex justify-center items-center ${isVisible ? 'fadeIn' : ''}`}> ⇛</a>
      <ul className={`step2 steps ${isVisible ? 'fadeIn' : ''}`}>
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
        <li className="step step-primary "></li>
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
      </ul>
      <a href='/four' className={`butt2 text-8xl flex justify-center items-center ${isVisible ? 'fadeIn' : ''}`}> ⇚</a>
      <a href='' className={`butt3 text-2xl flex justify-center items-center hover:bg-white ${isVisible ? 'fadeIn' : ''}`}> ИГРАТЬ!!!</a>
    </div>
  );
};

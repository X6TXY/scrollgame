import React, { useEffect, useState } from 'react';
import img2 from './assets/2.jpg';
import './First.css';

export const FirstStage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className={`h-screen w-screen flex justify-center text-black ${isVisible ? 'fadeIn' : ''}`}>
        <div className={`rectf bg-white drop-shadow-sm animate-fade-in ${isVisible ? 'fadeIn' : ''}`}>
          <h1 className={`rectf bg-white flex justify-center items-center text-2xl animate-slide-in ${isVisible ? 'fadeIn' : ''}`}>
            Детство Великого Маэстро
          </h1>
        </div>
        <img src={img2} alt="child" className={`img2 w-1/3 h-1/2 absolute drop-shadow-sm animate-slide-in ${isVisible ? 'fadeIn' : ''}`} />
        <div className={`rect11 drop-shadow-sm animate-slide-in ${isVisible ? 'fadeIn' : ''}`}>
          <h2 className={`text11 bg-white text-xl font-medium ${isVisible ? 'fadeIn' : ''}`}>Начало пути маэстро или путь начал маэстро</h2>
          <p className={`text22 bg-white flex justify-center items-center animate-fade-in ${isVisible ? 'fadeIn' : ''}`}>
            Бахрат Нуртас, великолепный человек, проявил изумительные способности с самого раннего детства. Он научился
            бегать и читать уже к шести месяцам, что является невероятным достижением. Родился он в прекрасном городе
            Караколтык, который стал источником вдохновения для его будущих творческих путей. Когда Бахрат вырос, он
            провел три года пахая землю на огороде. Этот опыт научил его ценности труда, посильных усилий и терпения.
            С каждым годом он становился все сильнее и целеустремленнее. После этого судьба забрала Бахрата в армию. Он
            служил в армии впечатляющие 20 лет, посвятив свою жизнь защите и служению своей родине. Во время своей
            военной службы он проявил выдающиеся лидерские качества, мужество и преданность обязанностям. Бахрат
            Нуртас - яркий пример того, как смелость, трудолюбие и упорство могут привести к успеху. Его история
            вдохновляет многих людей, и его достижения заслуживают похвалы и признания.
          </p>
        </div>
      </div>
      <a href='/second' className={`butt1 text-8xl flex justify-center items-center ${isVisible ? 'fadeIn' : ''}`}> ⇛</a>
      <ul className={`step2 steps ${isVisible ? 'fadeIn' : ''}`}>
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
        <li className="step "></li>
        <li className="step"></li>
        <li className="step "></li>
        <li className="step "></li>
      </ul>
      <a href='/' className={`butt2 text-8xl flex justify-center items-center ${isVisible ? 'fadeIn' : ''}`}> ⇚</a>
    </div>
  );
};

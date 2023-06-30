import React, { useEffect, useState } from 'react';
import img4 from './assets/4.png';
import './Third.css';

export const Third = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className={`h-screen w-screen flex justify-center ${isVisible ? 'fadeIn' : ''}`}>
        <div className={`rect41 bg-white drop-shadow-sm ${isVisible ? 'fadeIn' : ''}`}>
          <h1 className={`rect41 flex justify-center items-center text-2xl ${isVisible ? 'fadeIn' : ''}`}>Каждому нужны друзья</h1>
        </div>
        <div className={`rect42 bg-white ${isVisible ? 'fadeIn' : ''}`}>
          <h2 className={`text41 bg-white text-xl font-medium ${isVisible ? 'fadeIn' : ''}`}>Лучший друг</h2>
          <p className={`text42 bg-white flex justify-center items-center ${isVisible ? 'fadeIn' : ''}`}>
            Бахредин Нуртас был очень умным, что закончил ЕНУ за 1 год. Его потенциал заметила высокоуважаемая Далида и приняла решение пригласить его на инкубатор. Поступив на инкубатор, Бахредин решил испытать свои предпренимательские способности, то есть начал разводить менторов на мак флури. После того, как он обманул трех менторов, он понял, что так далеко не пойдет. То есть он начал учиться. В начале своего обучения Бахредин оказался в тяжелом состоянии: пока другие студенты писали полноценные сайты, у Бахредина сгорел ноутбук при попытке запустить print("Hello world"). Ерболат, завидев неспособного, но перспективного студента, начал его опекать и взял под свое крыло. Так Бахредин увидел в Ерболате своего товарища и будущего лучшего друга. Они начали проводить больше времени вместе и сдружились. Но в один момент Ерболат решил попробовать другой сорт меда, и на этом их дружба закончилась.
          </p>
        </div>
        <img src={img4} alt="bahredi" className={`img4 ${isVisible ? 'fadeIn' : ''}`} />
      </div>
      <a href="/four" className={`butt1 hover:bg-yellow-500 text-8xl flex justify-center items-center ${isVisible ? 'fadeIn' : ''}`}>
        ⇛
      </a>
      <ul className={`step2 steps ${isVisible ? 'fadeIn' : ''}`}>
      <a href='/main'><li className="step step-primary " ></li></a>
        <a href='/first'><li className="step step-primary " ></li></a>
        <a href='/second'><li className="step step-primary " ></li></a>
        <a href='/thrid'><li className="step step-primary " ></li></a>
        <a href='/four'><li className="step " ></li></a>
        <a href='/fifth'><li className="step  " ></li></a>
      </ul>
      <a href="/second" className={`butt2  hover:bg-yellow-500 text-8xl flex justify-center items-center ${isVisible ? 'fadeIn' : ''}`}>
        ⇚
      </a>
    </div>
  );
};

import React from 'react';
import img2 from './assets/2.jpg';
import logo3 from './assets/Vector 3.png';
import './First.css';

export const FirstStage = () => {
  return (
    <div>
      <div className="h-screen w-screen flex justify-center text-black">
        <div className="rectf bg-white drop-shadow-sm animate-fade-in">
          <h1 className="rectf bg-white flex justify-center items-center text-2xl animate-slide-in">
            Детство Великого Маэстро
          </h1>
        </div>
        <img src={img2} alt="child" className="img2 w-1/3 h-1/2 absolute drop-shadow-sm animate-slide-in" />
        <div className="rect11 drop-shadow-sm animate-slide-in">
          <h2 className="text11 bg-white text-xl font-medium">Начало пути маэстро или путь начал маэстро</h2>
          <p className="text22 bg-white flex justify-center items-center animate-fade-in">
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
      <img src={logo3} alt='cheto3' className='cheto3'></img>
    </div>
  );
};

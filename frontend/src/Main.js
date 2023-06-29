import img1 from "./assets/1.png";
import { ReactComponent as Car } from './assets/car.svg';
import { ReactComponent as Gun } from './assets/gun.svg';
import { ReactComponent as Tg } from './assets/tg.svg';
import './Main.css';
export const Main = () => {
    return (
      <div>
        <section className="mainpg">
          <a href="https://t.me/KairatNurtasAlgaBot"><Tg className='tg hover:bg-white '/></a>
        </section>
        <a href=''><Car className='car hover:bg-white ' /></a>
        <a href=''><Gun className='gun hover:bg-white ' /></a>
        <div className="h-screen w-screen flex justify-center ">
          <div className="rect bg-white drop-shadow-sm">
              <h1 className='rect flex justify-center items-center text-2xl'>Биография Великого Артиста</h1>
          </div>
          <img src={img1} alt='bahr' className='img1 w-1/3 h-1/2 absolute   drop-shadow-sm'></img>
          <div className='rect1 drop-shadow-sm  '>
              <h2 className='text1 bg-white text-xl font-medium'>Кайрат Нуртас или Бахредин Зургамбаев</h2>
              <p className='text2 bg-white flex justify-center items-center'>
                Кайрат Нуртас ( настоящее имя — БАХРЕДИН ЗУРГАМБАЕВ АСИМЖАНОВИЧ  род. 25 февраля 1989, Караколтык, Чимкентская область, Казахская ССР, СССР) — казахстанский эстрадный певец и актёр; поёт на казахском языке. 
                Лауреат государственной премии «Дарын» (2016).Коротко говоря Маэстро Казахстана и не только.Бахредину сейчас подражает молодежь.Его песни поют на разных массовых мероприятиях.В настоящее время находится на заслуженном отдыхе </p>
          </div>
          <a href='/first' className='butt1 text-8xl flex justify-center items-center'> ⇛</a>
          <ul className="steps">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
          </ul>
        </div>
      </div>
    );
  }
  

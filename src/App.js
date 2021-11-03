import { useState } from 'react';

import './App.css';

import pathBurgerImage from './images/burger.jpg';
import pathArrowLeft from './images/left-arrow.png';
import pathArrowRight from './images/right-arrow.png';
import pathFunnyBurger from './images/funny-burger.jpg'

function App() {

  const [countTomatoes, setCountTomatoes] = useState(2);
  const [countCucumbers, setCountCucumbers] = useState(2);
  const [isVisible, setIsVisible] = useState(false);

  const handleIncreaseCountTomatoes = (event) => {
    event.preventDefault();
    setCountTomatoes(previousValue => previousValue === 4 ? 4 : previousValue+=1);
  }

  const handleDecreaseCountTomatoes = (event) => {
    event.preventDefault();
    setCountTomatoes(previousValue => previousValue === 0 ? 0 :previousValue-=1);
  }

  const handleIncreaseCountCucumbers = (event) => {
    event.preventDefault();
    setCountCucumbers(previousValue => previousValue === 4 ? 4 : previousValue+=1);
  }

  const handleDecreaseCountCucumbers = (event) => {
    event.preventDefault();
    setCountCucumbers(previousValue => previousValue === 0 ? 0 :previousValue-=1);
  }

  const handleSubmitButton = (event) => {
    event.preventDefault();
    setIsVisible(!isVisible);
  }
  return (
    <section className="form-app">
        <div className={`form-app__container ${isVisible ? 'form-app__container_invisible' : ''}`}>
        
          <form className="form-app__form" >

          <h2 className="form-app__contact-info">Заполните свои <br /> контактные данные</h2>

            <div className="сontact-information">
              
              <div className="field-input">
                <p>Имя</p>
                <input type="text"/>
              </div>
              
              <div className="field-input">
                <p>Почта</p>
                <input type="email"/>
              </div>
              
              <div className="field-input">
                <p>Телефон</p>
                <input type="tel"/>
              </div>

            </div>

            <h2 className="form-app__text-hamburger">Настройсте ваш <br /> гамбургер</h2>

            <div className="selection">

              <p className="selection__text">Выберите котлету</p>
              <div className="selection__container">
              
                <div className="field-input">
                  <input type="radio" name="cutlet" value="beef" defaultChecked/>
                  <p>говядина</p>
                </div>

                <div className="field-input">
                  <input type="radio" name="cutlet" value="pork"/>
                  <p>свинина</p>
                </div>

                <div className="field-input">
                  <input type="radio" name="cutlet" value="hen"/> 
                  <p>курица</p>
                </div>
                
                <div className="field-input">
                  <input type="radio" name="cutlet" value="fish"/> 
                  <p>рыба</p>
                </div>

              </div>
            
              <p className="selection__text">Выберите сыр</p>
              <div className="selection__container">
              
                <div className="field-input">
                  <input type="radio" name="cheese" value="mozzarella" defaultChecked/>
                  <p>моцарелла</p>
                </div>

                <div className="field-input">
                  <input type="radio" name="cheese" value="parmesan"/>
                  <p>пармезан</p>
                </div>

                <div className="field-input">
                  <input type="radio" name="cheese" value="cheddar"/> 
                  <p>чеддер</p>
                </div>
                
                <div className="field-input">
                  <input type="radio" name="cheese" value="roquefort"/> 
                  <p>рокфор</p>
                </div>

              </div>

              <p className="selection__text">Лук</p>
              <div className="selection__container">

                <div className="field-input">
                  <input type="radio" name="onion" value="yes" defaultChecked/> 
                  <p>Добавить</p>
                </div>

                <div className="field-input">
                  <input type="radio" name="onion" value="no"/> 
                  <p>Убрать</p>
                </div>

              </div>

              <p className="selection__text">Cоус</p>
              <div className="selection__container">

                <div className="field-input">
                  <input type="radio" name="sauce" value="ketchup" defaultChecked/> 
                  <p>Кетчуп</p>
                </div>

                <div className="field-input">
                  <input type="radio" name="sauce" value="mayonnaise"/> 
                  <p>Майонез</p>
                </div>

                <div className="field-input">
                  <input type="radio" name="sauce" value="chili"/> 
                  <p>Чили</p>
                </div>

                <div className="field-input">
                  <input type="radio" name="sauce" value="cheese"/> 
                  <p>Сырный</p>
                </div>

              </div>

              <p className="selection__text">Количество ломтиков <br /> помидоров</p>
              <div className="number">
	              <button className="number-minus" onClick={handleDecreaseCountTomatoes}>-</button>
	              <input type="number" value={countTomatoes} readOnly={true} />
	              <button className="number-plus" onClick={handleIncreaseCountTomatoes}>+</button>
              </div>

              <p className="selection__text">Количество ломтиков <br /> огурцов</p>
              <div className="number">
	              <button className="number-minus" onClick={handleDecreaseCountCucumbers}>-</button>
	              <input type="number" value={countCucumbers} readOnly={true} />
	              <button className="number-plus" onClick={handleIncreaseCountCucumbers}>+</button>
              </div>

              <p className="selection__text">Какие-нибудь пожелания</p>
              <div className="field-input field-input__comment">
                <textarea />
              </div>
            </div>

            <button type="submit" onClick={handleSubmitButton}>сформировать ваш бургер</button>
            <button type="reset">сбросить все настройки</button>
            <img className="image-decoration" src={pathFunnyBurger} alt="Иконка бургера"/>

          </form>
          
          <div className="form-app__back-image" />

        </div>

        <div className={`modal-window ${isVisible ? 'modal-window__visible' : ''}`}>
          <div className="modal-window__wrapper">
            <h2>Бургер почти ваш!</h2>
            <p>Осталось указать адрес доставки и произвести оплату</p>
            <img src={pathBurgerImage} alt="Фотография бургера"/>
            <div className="modal-window__wrapper-button">
              <button className="modal-window__button-left" onClick={handleSubmitButton}>
                <img src={pathArrowLeft} alt="Икона левой стрелки"/>
              </button>
              <button className="modal-window__button-right">
                <img src={pathArrowRight} alt="Икона правой стрелки"/>
              </button>
            </div>
          </div>
        </div>

    </section>
  );
}

export default App;

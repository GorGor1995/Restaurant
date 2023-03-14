import React from "react";
import './style.css';

const Dishes = () => {
    return ( 
        <>
         <div className="dishes" >
        <div className="container" >
            <div className="dishes-title" >
                Наши <span> Блюда</span>
            </div>
            <div className="burgers" >
                <div className="burgers-image" >
                    <img src={require("./../../Pictures/pizza.jpg")} className="pizza" alt="" />
                </div>
                <div className="burgers-items" >
                    <div className="burger-item" >
                        <img src={require("./../../Pictures/hamburger.png")} className="burger" alt="" />
                        <div className="burger-text" >
                            Гамбургер мини ------------------ 220 ₽
                        </div>
                    </div>
                    <div className="burger-item" >
                        <img src={require("./../../Pictures/hamburger.png")} className="burger" alt="" />
                        <div className="burger-text" >
                            Гамбургер мини ------------------ 220 ₽
                        </div>
                    </div>
                    <div className="burger-item" >
                        <img src={require("./../../Pictures/hamburger.png")} className="burger" alt="" />
                        <div className="burger-text" >
                            Гамбургер мини ------------------ 220 ₽
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
     );
}
 
export default Dishes;
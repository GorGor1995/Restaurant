import React from "react";
import './style.css';

const Menu = () => {
    return ( 
        <>
         <div className="menu" >
            <div className="container" >
                <div className="menu-title" >
                    Наше меню
                </div>
                <div className="menu-items" >
                    <div className="menu-item" >
                        <div className="menu-image" >
                            <div className="recomend" >RECOMMENDED</div>
                        <img src={require("./../../Pictures/menu-item2.png")} className="menu-img" alt=""/>
                        </div>
                        <div className="menu-text" >
                            Гамбургер макси
                        </div>
                        
                        <div className="menu-subtext" >
                            Максимально толстый <br />слой мяса
                        </div>
                        <div className="menu-button" >
                            <a href="*" className="menu-btn" >ЗАКАЗАТЬ</a>

                        </div>
                    </div>
                    <div className="menu-item" >
                        <div className="menu-image" >
                        <img src={require("./../../Pictures/menu-item2.png")} className="menu-img" alt=""/>
                        </div>
                        <div className="menu-text" >
                            Гамбургер макси
                        </div>
                        <div className="menu-subtext" >
                            Максимально толстый <br />слой мяса
                        </div>
                        <div className="menu-button" >
                            <a href="*" className="menu-btn" >ЗАКАЗАТЬ</a>

                        </div>
                    </div>
                    <div className="menu-item" >
                        <div className="menu-image" >
                        <img src={require("./../../Pictures/menu-item2.png")} className="menu-img" alt=""/>
                        </div>
                        <div className="menu-text" >
                            Гамбургер макси
                        </div>
                        <div className="menu-subtext" >
                            Максимально толстый <br />слой мяса
                        </div>
                        <div className="menu-button" >
                            <a href="*" className="menu-btn" >ЗАКАЗАТЬ</a>

                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
     );
}
 
export default Menu;
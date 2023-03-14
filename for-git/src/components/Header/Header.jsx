import React from "react";
import './style.css';

const Header = () => {
    return ( 
        <>
        <div className="header" >
        <div className="container" >
        <div className="header-line" >
            <div className="header-logo" >
                <img src={require("./../../Pictures/logo.png")} alt=""/>
            </div>
            <div className="nav" >
                <a className="nav-item" href="*">ГЛАВНАЯ</a>
                <a className="nav-item" href="*">МЕНЮ</a>
                <a className="nav-item" href="*">О НАС</a>
                <a className="nav-item" href="*">БРОНЬ</a>
            </div>
            <div className="cart" >
                <a href="*">
                    <img className="cart-img" src={require("./../../Pictures/cart.png")} alt="" />
                </a>
            </div>
            <div className="phone" >
                <div className="phone-holder" >
                <div className="phone-img" >
                    <img src={require("./../../Pictures/phone.png")} alt="" />
                </div>
                <div className="number" >
                    <a  className="num" href="*" >+999-888-76-54</a>
                </div>
                </div>
                <div className="phone-text" >
                    Свяжитесь с нами для <br /> бронирования
                </div>
            </div>
            <div className="btn" >
                <a className="button" href="*">ЗАКАЗ СТОЛИКА</a>
            </div>
            <div className="burger-menu" >
               <button id="burger" > 
                <img src={require("./../../Pictures/Group.png")} alt="" />
            </button >
               <div id="menu"  className="burger-slide disp" >
                <a className="nav-item block" href="*">ГЛАВНАЯ</a>
                <a className="nav-item block" href="*">МЕНЮ</a>
                <a className="nav-item block" href="*">О НАС</a>
                <a className="nav-item block" href="*">БРОНЬ</a>
            
               </div>
            </div>
        </div>
        <div className="header-down" >
            <div className="header-title" > 
               Добро пожаловать в
               <div className="header-subtitle" >
                Наш ресторан
               </div>
               <div className="header-suptitle" >
                ДОМ ЛУЧШЕЙ ЕДЫ
               </div>
               <div className="header-btn" >
                <a className="header-txt" href="*">VIEW MENU</a>
               </div>
            </div>
        </div>

    </div>
    </div>
        </>
     );
}
 
export default Header;
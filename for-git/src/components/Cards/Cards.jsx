import React from "react";
import './style.css';

const Cards = () => {
    return ( 
        <>
         <div className="cards" >
        <div className="container" >
            <div className="cards-info" >
            <div className="cards-holder" >
            <div className="card" >
                <div className="card-image" >
        <img className="card-img" src={require("./../../Pictures/card1.png")} alt="" />
                </div>
                <div className="card-title" >
                    Магическая <span> Атмосфера</span>
                </div>
                <div className="card-desk" >
             В нашем заведении царит магическая атмосфера
                  наполненная вкусными ароматами
                </div>
            </div>
            <div className="card" >
                <div className="card-image" >
        <img className="card-img" src={require("./../../Pictures/card1.png")} alt="" />
                </div>
                <div className="card-title" >
                    Лучшее качество <span> Еды</span>
                </div>
                <div className="card-desk" >
                    Качество нашей 
                    Еды - отменное!
                    
                </div>
            </div>
            <div className="card" >
                <div className="card-image" >
        <img className="card-img" src={require("./../../Pictures/card1.png")} alt=""/>
                </div>
                <div className="card-title" >
                    Недорогая <span>Еда</span>
                </div> 
                <div className="card-desk" >
                    Стоимость нашей Еды
                    зависит только от ее
                    количества. Качество
                    всегда на высоте!
                </div>
            </div>
        </div>
            </div>
    </div>
    </div>
        </>
     );
}
 
export default Cards;
import React from "react";
import './style.css';

const History = () => {
    return ( 
        <>
         <div  className="history" >
        <div className="container" >
            <div className="history-holder" >
            <div className="history-info" >
        <div className="history-title" >
            Наша <span> История</span>
        </div>
        <div className="history-desk" >
            Как и у любого другого самобытного места, у нас есть своя, особая история. 
            Идея ресторана пришла основателям неожиданно. 
            Во время прогулки по лесу создатель нашего ресторана застрял в сотнях километров от ближайшего населенного пункта. 
            Вдали от цивилизации и связи им пришлось навремя обустровать себе нехитрый быт, добывать и готовить себе еду.
        </div>
        <div className="history-number" >
            <div className="number-item" >
                93 <span>Напитки</span>
            </div>
            <div className="number-item" >
                206 <span>Еда</span>
            </div>
            <div className="number-item" >
                71 <span>Закуски</span>
            </div>

        </div>
    </div>
    <div className="history-images" >
        <img className="image1" src={require("./../../Pictures/img1.jpg")} alt="" />
        <img className="image2" src={require("./../../Pictures/img2.jpg")} alt="" />
        <img className="image3" src={require("./../../Pictures/img3.jpg")} alt="" />
       </div>
    </div>
    </div>
    </div>
        </>
     );
}
 
export default History;
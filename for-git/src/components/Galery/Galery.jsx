import React from "react";
import './style.css';

const Galery = () => {
    return ( 
        <>
        <div className="galery" >
            <div className="container" >
                <div className="galery-title" >
                    Галерея <span>Блюд</span>
                </div>
                <div className="galery-content" >
                    <div className="galery-left">
                        <div className="galery-up" >
                           <img className="img-gal high" src={require("./../../Pictures/images/1.jpg"  )}alt="" />
                        </div>
                        <div className="galery-down" >
                            <img className="img-gal" src={require("./../../Pictures/images/2.jpg"  )}alt="" />
                            <img className="img-gal" src={require("./../../Pictures/images/3.jpg"  )}alt="" />
                        </div>
                    </div>
                    <div className="galery-right" >
                        <div className="galery-up" >
                            
                             <img className="img-gal" src={require("./../../Pictures/images/2.jpg"  )}alt="" />
                             <img className="img-gal" src={require("./../../Pictures/images/3.jpg"  )}alt="" />
                         </div>
                         <div className="galery-down" >
                            <img className="img-gal high " src={require("./../../Pictures/images/1.jpg"  )}alt="" />
                         </div>
                    </div>
                </div>
            </div>
         </div>
        </>
     );
}
 
export default Galery;
import React from "react";
import './style.css';

const Black = () => {
    return ( 
        <>
            <div className="black-block" >
        <div className="container" >
            <div className="block-holder" >
            <div className="left" >
              <div className="left-title" >
                Отпразднуйте в одном из <br />самых лучших ресторанов.
                      
              </div>
              <div className="left-text" >
                Только в этом месяце бизнес-ланч от 250 ₽
              </div>
            </div>
            <div className="right" >
                <div className="right-button" >
                    <a className="right-btn" href="*">ЗАКАЗ СТОЛИКА</a>
                </div>
            </div>
        </div>
        </div>
    </div>
        </>
     );
}
 
export default Black;
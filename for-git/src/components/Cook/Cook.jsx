import React from "react";
import './style.css';

const Cook = () => {
    return ( 
        <>
         <div className="cook" >  
            <div className="container" >
                <div className="cook-title" >Наши <span>Повара</span></div>
            </div>
            <div className="cook-images" >
                <img src={require("./../../Pictures/images/cook1.jpg")} className="cook1" alt="" />
                <img src={require("./../../Pictures/images/cook2.jpg")} className="cook2" alt="" />
                <img src={require("./../../Pictures/images/cook3.jpg")} className="cook3" alt="" />
                
            </div>
            
            
         </div>
        </>
     );
}
 
export default Cook;
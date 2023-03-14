import React from "react";
import './style.css';

const Comment = () => {
    return ( 
        <>
         <div className="comment" >
            <div className="container" >
                <div className="comment-text" >
                    Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек  родной <br/>
                    Армении!!! Отдельное спасибо за комплепент в виде фруктовой тарелки. Будем <br/>
                    рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, <br/>
                    путешествующих в Санкт-Петербург!!!
                </div>
                <div className="comment-image" >
                    <img src={require("./../../Pictures/userimg.png")} className="comment-img" alt="" />
                </div>
            <div className="user" >
                Посетитель
            </div>
            <div className="username" >
                Николай
            </div>
            <div className="dots" >
                <img src={require("./../../Pictures/111.png" )}alt="" />
                <img src={require("./../../Pictures/111.png" )}alt="" />
                <img src={require("./../../Pictures/222.png" )}alt="" />
            </div>
            </div>
         </div>
         
        </>
     );
}
 
export default Comment;
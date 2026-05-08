// components/Buttons.js

import React, {useState} from "react";

function Buttons  ({toggleTheme, nextImage,prevImage,current, total, theme}) {

    
    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false);

    const countLike = () => {
         setLiked((prev) => !prev);
         setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    };

    
    const email = "poojachawda2501@gmail.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            alert (`Email copied! You can now contact me at ${email}`);
        }).catch((err) => {
            console.error("Failed to copy email: ", err)
        });
    };


      

    return (

        <div className="buttons">

            <div className="left">
                <button onClick={toggleTheme} className="theme-toggle">
                    { theme === "light" ?   <span><img src="/icons/dark.png" alt="dark"/> dark </span> 
                        : <span><img src="/icons/light.png" alt="light"/> Light</span> }</button>

                <div className="next-image">
                    <img  src="/icons/prev.png" alt="prev" onClick={prevImage} />                     
                    <img  src="/icons/next.png" alt="prev" onClick={nextImage} />
                    <span>{current} / {total}</span>
                </div>  
                 
            </div>

            <div className="right">
                <div className="like-button" >
                   <span onClick={countLike}>  {liked ? <img src="/icons/hearta.png" alt="Like" /> : <img src="/icons/heartb.png" alt="Like" /> } </span> 
                   <span> {likeCount} </span>
                </div>
                 <button  onClick={copyEmail}  className="contact"><img src="/icons/contact.png" alt="contact" />contact</button>
            </div>
        </div>
    )
}


export default Buttons;
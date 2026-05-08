// component/PortfolioCard.js

import React , {useState, useEffect} from 'react';
import Bio from './Bio';
import Buttons from './Buttons';
import PersonalInfo from './PersonalInfo';
import './PortfolioCard.css';



function PortfolioCard() {
    const [theme, setTheme] = useState("light");
    const [imgIndex, setImgIndex] = useState(0);

    const images = [
        "/images/profile1.jpg",
        "/images/profile2.jpg",
        "/images/profile3.jpg",
        "/images/profile4.jpg"
    ];



    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        document.body.className=theme;
    }, [theme]);

    const nextImage = () => {
        setImgIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setImgIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    
  return (
    <div className={`portfolio-card ${theme}`}>

        <div className='header'>
            <div className="avatar-container"> 
                <img src={images[imgIndex]} alt='Profile'/>
            </div> 
      
            <PersonalInfo/>
        </div>

        <Bio/>

        <Buttons theme={theme} toggleTheme={toggleTheme} 
                 nextImage={nextImage} prevImage={prevImage} 
                 current={imgIndex +1} total={images.length}/>
    </div>
  );
};

export default PortfolioCard;
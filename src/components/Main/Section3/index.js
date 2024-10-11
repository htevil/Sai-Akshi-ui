import React, { useState, useEffect } from 'react';
import { images } from "../../../Data/imageData";
import next from "../../../asset/next.svg";
import prev from "../../../asset/prev.svg";

export default function Plans() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isSmallThan768, setIsSmallThan768] = useState(window.innerWidth < 768);
 

  const handleResize = () => {
    setIsSmallThan768(window.innerWidth < 768);
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 768) {
      setCardsPerPage(1);
    } else if (viewportWidth < 1200) {
      setCardsPerPage(2);
    } else {
      setCardsPerPage(3);
    }
  };

  useEffect(() => {
    handleResize(); // Call initially to set correct state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((currentIndex + cardsPerPage) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - cardsPerPage + images.length) % images.length);
  };

  const getCards = () => {
    const cards = images.slice(currentIndex, currentIndex + cardsPerPage);
    if (cards.length < cardsPerPage) {
      const remainingCards = cardsPerPage - cards.length;
      return [...cards, ...images.slice(0, remainingCards)];
    }
    return cards;
  };

  return (
    <div className="plans" id="Plans" style={{ width: "100%", paddingBottom: "20px", backgroundColor: "#D9EDBF", padding:"20px 0px" }}>
      <div style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
        <h1 className="heading" id='h3' style={{ fontSize: "32px", color: "#FF9800", marginBottom: "20px" }}>Our Plans</h1>
        <div className="slider" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginBottom: "20px" }} >
          {getCards().map((image, index) => (
            <div className='card' key={index} style={{ width:  isSmallThan768? "80%" : "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5px" }}>
              <img src={image.src} alt={`plan_${image.src}`} style={{ width:"100%", maxWidth: "440px", borderRadius: "8px", border: "3.5px solid #2C7865" }} />
              <span style={{ width: "40%", display: "flex", justifyContent: "center", alignItems: "center", padding: "6px 0px", backgroundColor: "#90D26D", borderRadius: "4px", color: "#2C7865", fontSize: "18px", fontWeight: "600" }}>{image.name}</span>
            </div>
          ))}
        </div>
        <div className='Navigation' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "200px", }} >
          <button type="button" id='prev' style={{ backgroundColor: "rgba(0,0,0,0.15)", border: "none", display: "flex", padding: "10px", borderRadius: "24px" }} onClick={handlePrev}>
            <img src={prev} alt="Previous" style={{ width: "32px" }} />
          </button>

          <button type="button" id='next' style={{ backgroundColor: "rgba(0,0,0,0.15)", border: "none", display: "flex", padding: "10px", borderRadius: "24px" }} onClick={handleNext}>
            <img src={next} alt="Next" style={{ width: "32px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
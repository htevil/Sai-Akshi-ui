import React, { useState, useEffect } from 'react';
import plan1 from "../../../asset/plan1.jpg";
import plan2 from "../../../asset/plan2.jpg";
import plan3 from "../../../asset/plan3.jpg";
import plan4 from "../../../asset/plan4.jpg";
import next from "../../../asset/next.svg";
import prev from "../../../asset/prev.svg";

export default function Plans() {
    const images = [plan1, plan2, plan3, plan4];
    const [currentIndex, setCurrentIndex] = useState(1)
    const showImages = 3;
    const autoSlideInterval = 5000; 

    const getCurrentSlice = () => {
        const firstPart = images.slice(currentIndex, currentIndex + showImages);
        const secondPart = images.slice(0, Math.max(0, (currentIndex + showImages) - images.length));
        return [...firstPart, ...secondPart];
    };

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleRightClick();
        }, autoSlideInterval);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div 
            className="Plan" 
            style={{ 
                width: "100%", 
                maxWidth: "1560px", 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center", 
                margin: "20px 0px" 
            }}
        >
            <h1 className="s3-heading" style={{ fontSize: "28px", marginBottom: "40px" }}>Plans</h1>
            
            <div 
                className="plans" 
                style={{ 
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center", 
                    gap: "20px", 
                    marginBottom: "20px" 
                }}
            >
                {getCurrentSlice().map((image, index) => (
                    <img 
                        src={image} 
                        className="plan_img" 
                        alt={`plan_${index}`} 
                        style={{ 
                            width: "100%", 
                            maxWidth: "450px", 
                            border: "2px solid grey" 
                        }} 
                        key={index}
                    />
                ))}
            </div>
            
            <div 
                style={{ 
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center", 
                    gap: "200px", 
                    margin: "20px" 
                }}
            >
                <button 
                    type="button" 
                    onClick={handleLeftClick} 
                    style={{ backgroundColor: "transparent", border: "none" }}
                >
                    <img src={prev} alt="Previous" style={{ width: "35px" }} />
                </button>
                
                <button 
                    type="button" 
                    onClick={handleRightClick} 
                    style={{ backgroundColor: "transparent", border: "none" }}
                >
                    <img src={next} alt="Next" style={{ width: "35px" }} />
                </button>
            </div>
        </div>
    );
}

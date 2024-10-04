import React, { useState, useEffect } from 'react';
import Plan1 from "../../../asset/plan1.jpg";
import Plan2 from "../../../asset/plan2.jpg";
import Plan3 from "../../../asset/plan3.jpg";
import Plan4 from "../../../asset/plan4.jpg";
import next from "../../../asset/next.svg";
import prev from "../../../asset/prev.svg";

export default function Plans() {
  const images = [Plan1, Plan2, Plan3, Plan4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleNext = () => {
    setIsUpdating(true);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (images.length - 2));
  };

  const handlePrev = () => {
    setIsUpdating(true);
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length - 2) % (images.length - 2));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsUpdating(true);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (images.length - 2));
    }, 8000); // Change image every 8 seconds
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsUpdating(false);
    }, 500); // Wait for 0.5 seconds before setting isUpdating to false
    return () => clearTimeout(timeoutId);
  }, [currentImageIndex]);

  return (
    <div className="plan" id="plan" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "20px", backgroundColor: "#D9EDBF" }}>
      <div style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
        <h1 style={{ fontSize: "32px", color: "#FF9800"}}>Our Plans</h1>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginBottom: "20px" }} >
          {images.slice(currentImageIndex, currentImageIndex + 3).map((imageName, index) => (
            <div key={index} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5px", animation: isUpdating ? "slideRight 0.5s ease-in-out" : "" }}>
              <img src={imageName} alt={`plan_${index + currentImageIndex}`} style={{ width: "100%", maxWidth: "440px", borderRadius: "8px", border: "3.5px solid #2C7865",}}/>
              <span style={{ width: "30%", display: "flex", justifyContent: "center", alignItems: "center", padding: "6px 0px", backgroundColor: "#90D26D", borderRadius: "4px", color: "#2C7865", fontSize: "18px", fontWeight: "600" }}></span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "200px", }} >
          <button type="button" onClick={handlePrev} style={{ backgroundColor: "rgba(0,0,0,0.15)", border: "none", display: "flex", padding: "10px", borderRadius: "24px" }}>
            <img src={prev} alt="Previous" style={{ width: "32px" }} />
          </button>

          <button type="button" onClick={handleNext} style={{ backgroundColor: "rgba(0,0,0,0.15)", border: "none", display: "flex", padding: "10px", borderRadius: "24px" }}>
            <img src={next} alt="Next" style={{ width: "32px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
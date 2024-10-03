import React, { useState, useEffect } from 'react';
import Plan1 from "../../../asset/plan1.jpg";
import Plan2 from "../../../asset/plan2.jpg";
import Plan3 from "../../../asset/plan3.jpg";
import Plan4 from "../../../asset/plan4.jpg";
import next from "../../../asset/next.svg";
import prev from "../../../asset/prev.svg";

export default function Plans() {
    const images = [Plan1, Plan2, Plan3, Plan4];
    const [currentIndex, setCurrentIndex] = useState(1);
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

    const getImageName = (imagePath) => {
        return imagePath.split("/").pop().split(".")[0]; // Extract image name from the path
    };

    return (
        <div id='Plans'
            style={{
                width: "100%",
                maxWidth: "1560px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "20px",
                backgroundColor:"#D9EDBF"
            }}
        >
            <h3 style={{ fontSize: "32px", marginBottom: "20px", color:"#FF9800" }}>
                Our Plans
            </h3>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    marginBottom: "20px"
                }}
            >
                {getCurrentSlice().map((imageName, index) => (
                    <div key={index} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",gap:"5px" }}>
                        <img
                            src={imageName}
                            alt={`plan_${index}`}
                            style={{
                                width: "100%",
                                maxWidth: "440px",
                                borderRadius:"8px",
                                border:"3.5px solid #2C7865"
                            }}
                        />
                        <span style={{color:"white", padding:"6px 32px 8px 32px", backgroundColor:"#90D26D", borderRadius:"8px",color:"#2C7865",fontSize:"18px", fontWeight:"600"}}>{getImageName(imageName)}</span> {/* Display the image file name */}
                    </div>
                ))}
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "200px",
                    marginTop:"10px"
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

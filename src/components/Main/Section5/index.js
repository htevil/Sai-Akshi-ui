import location from "../../../asset/location.jpg";
import { useState, useEffect } from "react";
import React from 'react';

export default function Section5() {
    const [isLargerThan1024, setIsLargerThan1024] = useState(window.innerWidth > 1025);
    const [isSmallThan768, setIsSmallThan768] = useState(window.innerWidth < 768);

    let width = "";
    // Calculate height based on screen width
    if (isLargerThan1024) {
        width = "35%"
    } else {
        if (isSmallThan768) {
            width = "75%"
        } else {
            width = "50%"
        }
    }

    const handleResize = () => {
        setIsLargerThan1024(window.innerWidth > 1024);
        setIsSmallThan768(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {window.removeEventListener('resize', handleResize);};
    }, []);
    return (
        <div className="view" id="Location-Advantages" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin:"20px 0px" }}>
            <div className="top-part" style={{ animation: "h1 linear", animationTimeline: "view()", animationRange: "entry 10% cover"}}>
                <h1 className="heading" style={{ fontSize: isSmallThan768? "28px" :"32px", color: "#2C7865" }}>Location Advantages</h1>
            </div>

            <div className="down-part" style={{ display: "flex", flexDirection: isLargerThan1024 ? "row" : "column", justifyContent: "center", alignItems: "center", gap: isLargerThan1024 ? "10px": "20px"}}>
                <div className="main-left" style={{ width}} >
                    <img src={location} alt="no-location" style={{ width: "100%", border: "none", borderRadius: "4px", animation: "m1 linear", animationTimeline: "view()", animationRange: "entry 0%" }} />
                </div>
                <div className="main-right" style={{ width: isLargerThan1024 ? "50%" : "70%", fontSize: isSmallThan768 ? "14px" : "16px", letterSpacing: isSmallThan768? "" : "0.5px", lineHeight: "1.5", color: "#2C7865", animation: "m2 linear", animationTimeline: "view()", animationRange: "entry 0%", textAlign: isSmallThan768? "" : "justify" }}>
                    <p>
                        The project has easy access to public transport. The locality houses all the required basic necessities like banks, ATMs, malls, grocers, schools, hospitals, temples, mosques, etc.
                    </p>
                    <ul style={{ listStyleType: 'disc' }}>
                        <style>
                            {`
                            ul li::marker {
                                color: #FF9800;
                            }
                            `}
                        </style>
                        <li>
                            <b style={{ color: "#FF9800", fontSize: isSmallThan768? "16px" : "18px" }}>Railway Station: </b>Bhandup and Nahur
                        </li>
                        <li>
                            <b style={{ color: "#FF9800", fontSize: isSmallThan768? "16px" : "18px" }}>Metro Station: </b>Shangrila and Bhandup
                        </li>
                        <li>
                            <b style={{ color: "#FF9800", fontSize: isSmallThan768? "16px" : "18px" }}>Schools: </b>Pawar Public School, National Education Society College and Kaveri
                        </li>
                        <li>
                            <b style={{ color: "#FF9800", fontSize: isSmallThan768? "16px" : "18px" }}>Hospitals: </b>Badwaik Hospital and FORTIS Hospital
                        </li>
                        <li>
                            <b style={{ color: "#FF9800", fontSize: isSmallThan768? "16px" : "18px" }}>Malls: </b>Magnet Mall and Neptune Mall
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

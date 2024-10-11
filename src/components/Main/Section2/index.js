import { useState, useEffect } from "react";
export default function Section2() {

    let value = [
        "Wooden Flooring in Master Bedroom",
        "Air Conditioner in Master Bedroom",
        "Terrace Garden",
        "Meditation Area",
        "Sitting Lounge Area at Terrace",
        "Star Gazing Area at Terrace",
        "Intercom Facility In Each Flat",
        "Vitrified Flooring In All Rooms",
        "Luster Paint In All Rooms",
        "Modern Security With Intercom & Fire Fighting Systems",
        "Designer Tiles In Bathroom Upto Beam Level",
        "FRP Doors For Bathroom",
        "Gypsum On Walls",
        "Aluminium Anodized Sliding Windows With 4mm Glass",
        "Granite Top Kitchen Platform With Full Height Ceramic Tiles Upto Beam Level",
        "Platform With Premium S.S. Sink",
        "Concealed Wiring With Ample Electrical Points & Modular Switches",
        "Good Quality Hardware Fittings",
        "Concealed Plumbing With Premium Quality C.P. Fittings & Branded Sanitary Ware",
        "China Mosiac Flooring On Attached Terraces",
        "Earthquake Resistant Structure",
        "Fully Automatic Elevators",
        "Power Backup For Lifts",
        "Textured External Paint",
        "Elegant Entrance Lobby",
        "Mesmerising Elevation",
        "Multi Facility Gymnasium"
    ];

    const [isLargerThan1024, setIsLargerThan1024] = useState(window.innerWidth > 1024);
    const [isSmallThan768, setIsSmallThan768] = useState(window.innerWidth < 768);

    let gridTemplateColumns = "";

    if (isLargerThan1024) {
        gridTemplateColumns = "repeat(3, 1fr)";
    } else {
        if (isSmallThan768) {
            gridTemplateColumns = "repeat(1, 1fr)";
        } else {
            gridTemplateColumns = "repeat(2, 1fr)"; 
        }
    }

    const handleResize = () => {
        setIsLargerThan1024(window.innerWidth > 1024);
        setIsSmallThan768(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); };
    }, []);

    return (
        <div className="view" id="Amenities" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0px" }}>
            <div className="top-part" style={{ animation: "h1 linear", animationTimeline: "view()", animationRange: "entry 0%", marginBottom: "20px", }}>
                <h1 className="heading" style={{ fontSize: isSmallThan768? "28px" : "32px", color: "#2C7865" }}>Amenities</h1>
            </div>
            <div className="down-part" style={{ width: isSmallThan768? "70%" : "80%", display: "grid", gridTemplateColumns, gridColumnGap: "20px", gridRowGap: isSmallThan768? "30px" : "60px" }}>
                {
                    value.map((item, index) => (
                        <div className="block" key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", padding: isSmallThan768? "15px" : "20px", border: "1px solid #ddd", borderRadius: "8px", fontSize: isSmallThan768? "14px" : "16px", backgroundColor: "#FF9800", color: "white", animation: "m3 linear", animationTimeline: "view()", animationRange: "entry 0%" }}>
                            {item}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

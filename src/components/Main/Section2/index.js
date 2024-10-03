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

    return (
        <div id="Amenities" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1 className="s2-heading" style={{fontSize:"32px", color:"#2C7865"}}>Amenities</h1>
            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridColumnGap: "20px", gridRowGap: "40px",padding: "20px 150px" }}>
                {
                    value.map((item, index) => (
                        <div key={index} style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign:"center", fontSize:"16px", backgroundColor:"#FF9800",color:"white" }}>
                            {item}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

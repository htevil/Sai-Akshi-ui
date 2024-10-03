import location from "../../../asset/location.jpg"

import React from 'react';

export default function Section5() {
    return (
        <div id="Location-Advantages" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h1 className="s5-heading" style={{ fontSize: "32px",color:"#2C7865"}}>Location Advantages</h1>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "20px 200px" }}>
                <div style={{ width: "150%" }} >
                    <img src={location} alt="no-loocation" style={{ width: "100%", border:"none", borderRadius:"12px"  }} />
                </div>
                <div style={{ fontSize: "16px", letterSpacing: "0.5px", lineHeight: "1.5", backgroundColor:"#FF9800", padding:"40px 40px 40px 60px", }}>
                    <p >
                        The project has easy access to public transport. The locality houses all the required basic necessities like banks, ATMs, malls, grocers, schools, hospitals, temples, mosques, etc.
                    </p>
                    <ul >
                        <li>
                            <b style={{color:"#2C7865"}}>Railway Station: </b>Bhandup and Nahur
                        </li>
                        <li>
                            <b style={{color:"#2C7865"}}>Metro Station: </b>Shangrila and Bhandup
                        </li>
                        <li >
                            <b style={{color:"#2C7865"}}>Schools: </b>Pawar Public School, National Education Society College and Kaveri
                        </li>
                        <li >
                            <b style={{color:"#2C7865"}}>Hospitals: </b>Badwaik Hospital and FORTIS Hospital
                        </li>
                        <li >
                            <b style={{color:"#2C7865"}}>Malls: </b>Magnet Mall and Neptune Mall
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

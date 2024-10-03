import location from "../../../asset/location.jpg"

import React from 'react';

export default function Section5() {
    return (
        <div className="Location-Advantages" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0px" }}>
            <h1 className="s5-heading" style={{ fontSize: "28px", marginBottom: "20px" }}>Location Advantages</h1>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "40px", padding: "40px 120px 20px" }}>
                <div style={{ width: "90%" }} >
                    <img src={location} alt="no-loocation" style={{ width: "100%", borderRadius:"16px" }} />
                </div>
                <div style={{ fontSize: "16px", letterSpacing: "0.5px", lineHeight: "1.5" }}>
                    <p >
                        The project has easy access to public transport. The locality houses all the required basic necessities like banks, ATMs, malls, grocers, schools, hospitals, temples, mosques, etc.
                    </p>
                    <ul >
                        <li>
                            <b>Railway Station: </b>Bhandup and Nahur
                        </li>
                        <li>
                            <b>Metro Station: </b>Shangrila and Bhandup
                        </li>
                        <li >
                            <b>Schools: </b>Pawar Public School, National Education Society College and Kaveri
                        </li>
                        <li >
                            <b>Hospitals: </b>Badwaik Hospital and FORTIS Hospital
                        </li>
                        <li >
                            <b>Malls: </b>Magnet Mall and Neptune Mall
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

import location from "../../../asset/location.jpg"

import React from 'react';

export default function Section5() {
    return (
        <div className="Location-Advantages" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0px" }}>
            <h1 className="s5-heading" style={{ fontSize: "28px", marginBottom: "40px" }}>Location Advantages</h1>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "50px", padding: "40px 150px" }}>
                <div style={{ width: "800px" }} >
                    <img src={location} alt="no-loocation" style={{ width: "100%" }} />
                </div>
                <div style={{ fontSize: "18px", letterSpacing: "0.5px", lineHeight: "1.5" }}>
                    <p className="ov_pp sal-animate" data-sal="slide-up" data-sal-duration="1200" data-sal-delay="200" data-sal-easing="ease-out-back">
                        The project has easy access to public transport. The locality houses all the required basic necessities like banks, ATMs, malls, grocers, schools, hospitals, temples, mosques, etc.
                    </p>
                    <ul className="la_ul">
                        <li data-sal="slide-up" data-sal-duration="1200" data-sal-delay="200" data-sal-easing="ease-out-back" className="sal-animate">
                            <b>Railway Station: </b>Bhandup and Nahur
                        </li>
                        <li data-sal="slide-up" data-sal-duration="1200" data-sal-delay="200" data-sal-easing="ease-out-back" className="sal-animate">
                            <b>Metro Station: </b>Shangrila and Bhandup
                        </li>
                        <li data-sal="slide-up" data-sal-duration="1200" data-sal-delay="200" data-sal-easing="ease-out-back" className="sal-animate">
                            <b>Schools: </b>Pawar Public School, National Education Society College and Kaveri
                        </li>
                        <li data-sal="slide-up" data-sal-duration="1200" data-sal-delay="200" data-sal-easing="ease-out-back" className="sal-animate">
                            <b>Hospitals: </b>Badwaik Hospital and FORTIS Hospital
                        </li>
                        <li data-sal="slide-up" data-sal-duration="1200" data-sal-delay="200" data-sal-easing="ease-out-back" className="sal-animate">
                            <b>Malls: </b>Magnet Mall and Neptune Mall
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

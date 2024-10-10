import React from 'react';
import { useState, useEffect } from "react";


export default function ReraDisclaimer({ closeDisclaimer1 }) {
    const [isSmallThan768, setIsSmallThan768] = useState(window.innerWidth < 768);


    const handleResize = () => {
        setIsSmallThan768(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {window.removeEventListener('resize', handleResize);};
    }, []);
    return (
        
        <div class="ReraDisclaimer" style={{ width: isSmallThan768 ? "80%" : "70%", position: "fixed", top: isSmallThan768? "5%" : "10%", left: isSmallThan768 ? "4%" : "14%", backgroundColor: "rgba(0,0,0,0.89)", padding: "25px", borderRadius: "8px", zIndex:"22" }} >
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <span style={{ color: "white",width: "55%", fontFamily:"serif", fontSize:"16px", display: "flex", justifyContent: "flex-end", alignItems: "center",fontFamily:"sans-serif", }}>RERA DISCLAIMER</span>
                <span style={{ color: "white", width: "45%", fontSize: "16px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                    <button onClick={() => closeDisclaimer1(false)} style={{ backgroundColor: "transparent", border: "none", color: "white", fontSize: "22px" }} s>x</button>
                </span>

            </div>
            <p style={{ color: "white", fontFamily:"sans-serif", fontSize: isSmallThan768? "10px" : "12px", fontWeight: "300", marginBottom: "10px", letterSpacing: "0.5px", lineHeight: isSmallThan768?  "" :"1.5" }}>The Real Estate (Regulation and Development) Act, 2016 has been introduced and the rules and regulations notified thereunder ("RERA") on 1st May 2017. The process of updating our website is being initiated to ensure full compliance with the law.
                <br />
                <br />
                The advertisements available on the website were created prior to RERA came into force and thus contains/may contain promotional material related to future phases of the project. The offerings outlined in those advertisements in whatever form may not be a part of the initial phase of the project and may be delivered in later phases or on completion of the Project.
                <br />
                <br />
                The present content on the website(s), specifications and amenities including but not limited to visuals, pictures, images/ renderings/maps are purely indicative and informative in nature and only an architect's impression and only indicative of the envisaged development and not actual depiction of buildings/landscapes etc. And shall not be considered as our offer/promise/commitment of any nature in respect of the project the same is subject to approval from local authorities.
                <br />
                <br />
                The common areas and amenities that have been shown in any advertisement, audio visuals and/or any type of communication in any form whatsoever is/are for the entire Project and not specific for any particular building or phase of the Project and that the common areas and amenities will not be available on completion of the first phase of the Project or later phases. The common areas and amenities shall be available for the entire project and will be developed in a phase-wise manner, over a period of time.
                <br />
                <br />
                The details of the projects undertaken by the company including the brochures, plans, elevations, images, projections, details, descriptions, contents pertaining to the projects are being modified in terms of the stipulations/ recommendations under the Real Estate Act 2016 and rules made thereunder (RERA). You are required to verify all the details, including area, amenities, services, terms of sales, payments and other relevant terms independently with the company sales team, by physically visiting the project site.Any decision regarding booking of the apartment/s in the project by you, until the project is registered under RERA, relying upon the contents of this website shall be solely at your costs and consequences. Sai Akshi and or its directors, employees, are not liable for any consequence of any action taken by the viewer relying on such material/information on this web.
            </p>
        </div>
    );
}

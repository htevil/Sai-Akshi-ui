import React from 'react';
import { useState, useEffect } from "react";

export default function Disclaimer({ closeDisclaimer2 }) {
    const [isSmallThan768, setIsSmallThan768] = useState(window.innerWidth < 768);


    const handleResize = () => {
        setIsSmallThan768(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {window.removeEventListener('resize', handleResize);};
    }, []);

    return (
        <div class="Disclaimer" style={{ width: isSmallThan768? "70%" : "55%", position: "fixed", top: isSmallThan768? "10%" :"20%", left: isSmallThan768? "10%" : "20%", backgroundColor: "rgba(0,0,0,0.89)", padding: "25px", borderRadius:"8px" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <span style={{ color: "white",width: "55%", fontSize:"16px", display: "flex", justifyContent: "flex-end", alignItems: "center", fontFamily:"sans-serif", }} >DISCLAIMER</span>
                <span  style={{ width: "45%", display: "flex", justifyContent: "flex-end", alignItems: "center", }}>
                    <button onClick={() => closeDisclaimer2(false)} style={{ backgroundColor: "transparent", border: "none",color:"white", fontSize:"22px" }}>x</button>
                </span>
            </div>
            <p style={{ color: "white",marginBottom:"10px",letterSpacing:"0.5px", lineHeight:"1.5", textAlign: "justify", fontWeight: "300",fontFamily:"sans-serif" }}> All the plans, designs, images, specifications, dimensions, facilities and other details herein are purely indicative in nature and the intended recipient should note that these are to be treated as purely provisional and informative and as such only tentative subject to the approval from respective authorities. The Sample/ Show Flats displayed in the website are only for the purpose of showcasing the potential of the flats after fitouts, while intimating the recipient hereof/intending Purchaser that the Flats proposed to be sold shall be subject to a variation of +/- 3%. It is also made clear that the images of sample/show flats are neither an offer nor a contract by the Developer/Co-Developer/Promoter to provide to the intending purchaser "furnished flats". The Amenities displayed in the website are also tentative and proposed, and subject to approval from the Competent Authorities, final list whereof shall be provided in the Agreement for Sale as and when executed. We reserve the right to modify / change / amend / alter any of the aforesaid in the best interest of the development without prior intimation / notice and without any obligation. The contents herein should not be construed as an offer / invitation to offer / contract. Any party desirous / interested in the project needs to enter into agreement for sale and the development / transaction shall be governed by the terms and conditions of the agreement for sale. The inter alia images, content herein is for illustrative and representational purposes only. Government Fees &amp; Taxes are Extra (As Applicable), GST, Stamp Duty &amp; Registration Charges as applicable, Other Charges Payable at the time of Possession, Conditions apply. </p>
        </div>
    );
}
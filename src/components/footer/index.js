import React, { useState } from 'react';
import Disclaimer from '../Modal/Disclaimer';
import ReraDisclaimer from '../Modal/ReraDisclaimer';

export default function Footer() {
    const [openDisclaimer1, setOpenDisclaimer1] = useState(false);
    const [openDisclaimer2, setOpenDisclaimer2] = useState(false);

    return (
        <div className="footer" style={{ fontSize: "14px", padding: "5px 0px" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                <span>All rights are reserved</span> <span>|</span>
                <span>Copyright © 2024 Sai Akshi</span> <span>|</span>
                <button onClick={() => setOpenDisclaimer1(true)} style={{backgroundColor:"transparent", border:"none", color:"blue", padding:"0px", margin:"0px",alignSelf:"self-end"}}>RERA Disclaimer</button> <span>|</span>
                <button onClick={() => setOpenDisclaimer2(true)} style={{backgroundColor:"transparent", border:"none", color:"blue",padding:"0px", margin:"0px",alignSelf:"self-end" }} >Disclaimer</button>
                {/* <span className="bn_key_span">Powered By <a href="https://www.brandniti.com"><img src="images/bn_key.png" className="bn_key" alt="" /></a></span> */}
            </div>
            {openDisclaimer1 && <ReraDisclaimer closeDisclaimer1={setOpenDisclaimer1} />}
            {openDisclaimer2 && <Disclaimer  closeDisclaimer2={setOpenDisclaimer2} />}
        </div>
    );
}

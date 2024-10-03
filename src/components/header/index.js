import { useState } from "react";
import desktop from "../../asset/desktop.jpg";
import Navbar from "../navbar";
import EnquireNow from "../Modal/EnquireNow";

export default function Header() {
    const [openEnquireNow, setOpenEnquireNow] = useState(false);

    return (
        <div className="header" style={{ width: "100%", maxWidth: "1560px", marginBottom: "20px" }}>
            <Navbar />
            <div style={{ width: "100%" }}>
                <img src={desktop} alt="no_desktop" style={{ width: "100%" }} />
            </div>
            <div style={{position: "fixed",right: "-3.5%",top: "30%", transform: "translateY(-50%) rotate(-90deg)",cursor: "pointer",zIndex: "9px"}}>
                <button onClick={() => setOpenEnquireNow(true)} style={{border:"none",borderRadius:"5px", padding:"8px 20px 12px 20px", backgroundColor:"orange", fontSize:"16px",zIndex: "9"}} >Enquire Now</button>
            </div>
            {openEnquireNow && <EnquireNow closeEnquireNow={setOpenEnquireNow} />}
        </div>
    );
}

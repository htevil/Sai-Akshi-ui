import { useState } from "react";
import desktop from "../../asset/desktop.jpg";
import Navbar from "../navbar";
import EnquireNow from "../Modal/EnquireNow";

export default function Header() {
    const [openEnquireNow, setOpenEnquireNow] = useState(true);

    return (
        <div className="header" style={{ width: "100%", height:"fit-content", maxWidth: "1560px",display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Navbar />
            <div className="header_img" style={{ width: "100%",  height:"fit-content", margin:"60px 0px 20px" }}>
                <img src={desktop} alt="no_desktop" style={{ width: "100%", height:"fit-content" }} />
            </div>
            {
               !openEnquireNow &&              
               <div style={{ position: "fixed", right: "-3.5%", top: "30%", transform: "translateY(-50%) rotate(-90deg)", cursor: "pointer", zIndex: 9 }}>
                    <button 
                        onClick={() => setOpenEnquireNow(true)} 
                        style={{ border: "none", borderRadius: "5px", padding: "8px 20px 12px 20px", backgroundColor: "#FF9800", fontSize: "16px", color:"white" }} 
                    >
                        Enquire Now
                    </button>
                </div>
            }

            {openEnquireNow && <EnquireNow closeEnquireNow={setOpenEnquireNow} />}
        </div>
    );
}

import { useState, useEffect } from "react"; 
import desktop from "../../asset/desktop.jpg"; 
import mobile from "../../asset/mobile5.jpg"; 
import Navbar from "../navbar"; 
import EnquireNow from "../Modal/EnquireNow";

export default function Header() { 
    const [openEnquireNow, setOpenEnquireNow] = useState(false); 
    const [isLargerThan1024, setIsLargerThan1024] = useState(window.innerWidth > 1024); 
    const [isSmallThan768, setIsSmallThan768] = useState(window.innerWidth < 768);

    const handleResize = () => { 
        setIsLargerThan1024(window.innerWidth > 1024); 
        setIsSmallThan768(window.innerWidth < 768); 
    };

    useEffect(() => { 
        window.addEventListener('resize', handleResize); 
        return () => window.removeEventListener('resize', handleResize); 
    }, []);

    const height = isLargerThan1024 ? "85vh" : isSmallThan768 ? "50vh" : "70vh"; 

    return (
        <div style={{ width: "100%", height: "fit-content", maxWidth: "1560px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Navbar />
            <div style={{ width: "100%", height, maxHeight: "610px", margin: "50px 0px 20px", backgroundColor: "#D9EDBF", backgroundImage: isSmallThan768 ? `url(${mobile})` : `url(${desktop})`, backgroundSize: "cover" }}></div>
            {!openEnquireNow && (
                <div style={{ position: "fixed", right: "-50px", top: "25%", transform: "translateY(-50%) rotate(-90deg)", cursor: "pointer", zIndex: 9 }}>
                    <button onClick={() => setOpenEnquireNow(true)} style={{ border: "none", borderRadius: "5px", padding: isSmallThan768 ? "5px 12px 12px 12px" : "8px 20px 12px 20px", backgroundColor: "#FF9800", fontSize: isSmallThan768 ? "16px" : "14px", color: "white" }}>Enquire Now</button>
                </div>
            )}
            {openEnquireNow && <EnquireNow closeEnquireNow={setOpenEnquireNow} />}
        </div>
    );
}

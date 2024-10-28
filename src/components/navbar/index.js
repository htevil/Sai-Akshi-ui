import { useState, useEffect } from "react"; 
import logo from "../../asset/logo.png"; 
import menubtn from "../../asset/hmenu.png"; 
import menubtn1 from "../../asset/hmenu1.png"; 
import closemenubtn from "../../asset/close1.png";

export default function Navbar() { 
    const [sidebarOpen, setSidebarOpen] = useState(false); 
    const [isMobile, setIsMobile] = useState(false); 
    const [isLargerThan1024, setIsLargerThan1024] = useState(window.innerWidth > 1024);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    const handleResize = () => { 
        setIsLargerThan1024(window.innerWidth > 1024); 
        setIsMobile(window.innerWidth < 1025); 
        if (window.innerWidth >= 1025) setSidebarOpen(false); 
    };

    useEffect(() => { 
        handleResize(); 
        window.addEventListener("resize", handleResize); 
        return () => window.removeEventListener("resize", handleResize); 
    }, []);

    return (
        <>
            <div style={{ width: "100%", height: "fit-content", position: "fixed", top: 0, backgroundColor: "#D9EDBF", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 20 }}>
                <div style={{ width: "100%", maxWidth: "1560px", display: "flex", justifyContent: "space-between", alignItems: "center", padding: isLargerThan1024 ? "8px 40px 10px 40px" : "5px 20px" }}>
                    <button onClick={() => (window.location.href = "/")} style={{ backgroundColor: "transparent", border: "none", padding: "0" }}>
                        <img src={logo} alt="no_logo" style={{ width: isLargerThan1024 ? "100%" : "75%", maxWidth: "120px", backgroundColor: "transparent" }} />
                    </button>

                    {isMobile ? (
                        <div onClick={toggleSidebar} style={{ width: "40px", cursor: "pointer" }}>
                            <img src={sidebarOpen ? menubtn1 : menubtn} alt="menu_btn" style={{ width: "100%" }} />
                        </div>
                    ) : (
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", fontSize: "16px", fontWeight: 500, color: "#90D26D" }}>
                            <a href="#Overview">Overview</a><span> | </span>
                            <a href="#Amenities">Amenities</a><span> | </span>
                            <a href="#Plans">Plans</a><span> | </span>
                            <a href="#Walkthrough">Walkthrough</a><span> | </span>
                            <a href="#Location-Advantages">Location Advantages</a><span> | </span>
                            <a href="#Enquire-Now">Enquire Now</a>
                        </div>
                    )}
                </div>
            </div>

            {isMobile && (
                <div style={{ position: "fixed", top: 0, left: sidebarOpen ? 0 : "-300px", width: "200px", height: "100%", backgroundColor: "#D9EDBF", boxShadow: "2px 0 5px rgba(0,0,0,0.2)", transition: "left 0.3s ease", zIndex: 100, display: "flex", flexDirection: "column", padding: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "flex-end", paddingBottom: "20px" }}>
                        <img src={closemenubtn} alt="close_btn" onClick={toggleSidebar} style={{ width: "24px", cursor: "pointer" }} />
                    </div>
                    <nav style={{ fontSize: "18px", display: "flex", flexDirection: "column", gap: "40px" }}>
                        <a href="#Overview">Overview</a>
                        <a href="#Amenities">Amenities</a>
                        <a href="#Plans">Plans</a>
                        <a href="#Walkthrough">Walkthrough</a>
                        <a href="#Location-Advantages">Location Advantages</a>
                        <a href="#Enquire-Now">Enquire Now</a>
                    </nav>
                </div>
            )}
        </>
    );
}

import logo from "../../asset/logo.png";

export default function Navbar() {
    return (
        <div className="navbar" style={{ width: "100%", height:"fit-content", position: "fixed", top: "0%", backgroundColor: "#D9EDBF",  display: "flex", justifyContent: "center", alignItems: "center", zIndex:"20"}}>
            <div style={{ width: "100%", maxWidth: "1560px", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 40px 10px"}}>
                <button className="logo-button" onClick={() => window.location.href = "/"} style={{ backgroundColor: "transparent", border: "none", }}>
                    <img src={logo} className="logos" alt="no_logo" style={{ width: "120px", backgroundColor: "transparent" }} />
                </button>
                <div id="menu-center" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", fontSize: "16px", fontWeight: "500", color: "#90D26D", textDecoration: "none" }}>
                    <a href="#Overview" style={{ textDecoration: "none", color: "#2C7865" }}>Overview</a><span className="menu_sp"> | </span>
                    <a href="#Amenities" style={{ textDecoration: "none", color: "#2C7865" }}>Amenities</a><span className="menu_sp"> | </span>
                    <a href="#Plans" style={{ textDecoration: "none", color: "#2C7865" }}>Plans</a><span className="menu_sp"> | </span>
                    <a href="#Walkthrough" style={{ textDecoration: "none", color: "#2C7865" }}>Walkthrough</a><span className="menu_sp"> | </span>
                    <a href="#Location-Advantages" style={{ textDecoration: "none", color: "#2C7865" }}>Location Advantages</a><span className="menu_sp"> | </span>
                    <a href="#Enquire-Now" style={{ textDecoration: "none", color: "#2C7865" }}>Enquire Now</a>
                </div>

            </div>

        </div>
    );
}

import { useState, useEffect } from "react";
import logo from "../../asset/logo.png";
import menubtn from "../../asset/hmenu.png";
import menubtn1 from "../../asset/hmenu1.png";
import closemenubtn from "../../asset/close1.png";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLargerThan1024, setIsLargerThan1024] = useState(true);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to check if the screen size is mobile (below 1024px)
  const handleResize = () => {
    if (window.innerWidth < 1025) {
      setIsMobile(true);
      setIsLargerThan1024(false);
    } else {
      setIsMobile(false);
      setSidebarOpen(false); // Close sidebar when resizing to larger screens
    }
  };

  // Add event listener for screen resizing
  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
    
        style={{
          width: "100%",
          height: "fit-content",
          position: "fixed",
          top: "0",
          backgroundColor: "#D9EDBF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "20",
        }}
      >
        <div
          className="navbar"
          style={{
            width: "100%",
            maxWidth: "1560px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: isLargerThan1024 ? "8px 40px 10px 40px" : "5px 20px",
          }}
        >
          {/* Logo */}
          <button
            className="logo-button"
            onClick={() => (window.location.href = "/")}
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <img
              src={logo}
              className="logos"
              alt="no_logo"
              style={{ width: "120px", backgroundColor: "transparent" }}
            />
          </button>

          {/* Hamburger Menu Button (only for mobile) */}
          {isMobile && (
            <div
              className="img-container"
              style={{
                width: "50px",
                cursor: "pointer",
              }}
              onClick={toggleSidebar}
            >
              <img
                src={sidebarOpen ? menubtn1 : menubtn}
                alt="menu_btn"
                style={{ width: "100%" }}
              />
            </div>
          )}

          {/* Full Navbar Menu (only for desktop) */}
          {!isMobile && (
            <div
              id="menu-center"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                fontSize: "16px",
                fontWeight: "500",
                color: "#90D26D",
                textDecoration: "none",
              }}
            >
              <a href="#Overview" style={{ textDecoration: "none", color: "#2C7865" }}>Overview</a><span className="menu_sp"> | </span>
              <a href="#Amenities" style={{ textDecoration: "none", color: "#2C7865" }}>Amenities</a><span className="menu_sp"> | </span>
              <a href="#Plans" style={{ textDecoration: "none", color: "#2C7865" }}>Plans</a><span className="menu_sp"> | </span>
              <a href="#Walkthrough" style={{ textDecoration: "none", color: "#2C7865" }}>Walkthrough</a><span className="menu_sp"> | </span>
              <a href="#Location-Advantages" style={{ textDecoration: "none", color: "#2C7865" }}>Location Advantages</a><span className="menu_sp"> | </span>
              <a href="#Enquire-Now" style={{ textDecoration: "none", color: "#2C7865" }}>Enquire Now</a>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar for smaller screens */}
      {isMobile && (
        <>
          <div
            className={`sidebar ${sidebarOpen ? "open" : ""}`}
            style={{
              position: "fixed",
              top: "0",
              left: sidebarOpen ? "0" : "-300px",
              width: "200px",
              height: "100%",
              backgroundColor: "#D9EDBF",
              boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
              transition: "left 0.3s ease",
              zIndex: "100",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              padding: "20px",
            }}
          >
            {/* Close button at the top-right inside the sidebar */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingBottom: "20px",
              }}
            >
              <img
                src={closemenubtn}
                alt="close_btn"
                style={{ width: "24px", cursor: "pointer" }}
                onClick={toggleSidebar}
              />
            </div>

            <nav
              style={{
                fontSize:"18px",
                display: "flex",
                flexDirection: "column",
                alignItems:"flex-start",
                gap: "40px",
              }}
            >
              <a href="#Overview" style={{ textDecoration: "none", color: "#2C7865" }}>Overview</a>
              <a href="#Amenities" style={{ textDecoration: "none", color: "#2C7865" }}>Amenities</a>
              <a href="#Plans" style={{ textDecoration: "none", color: "#2C7865" }}>Plans</a>
              <a href="#Walkthrough" style={{ textDecoration: "none", color: "#2C7865" }}>Walkthrough</a>
              <a href="#Location-Advantages" style={{ textDecoration: "none", color: "#2C7865" }}>Location Advantages</a>
              <a href="#Enquire-Now" style={{ textDecoration: "none", color: "#2C7865" }}>Enquire Now</a>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
import { useState, useEffect } from "react";
import desktop from "../../asset/desktop.jpg";
import mobile from "../../asset/mobile5.jpg";
import Navbar from "../navbar";
import EnquireNow from "../Modal/EnquireNow";

export default function Header() {
    const [openEnquireNow, setOpenEnquireNow] = useState(false);
    const [isLargerThan1024, setIsLargerThan1024] = useState(window.innerWidth > 1024);
    const [isSmallThan768, setIsSmallThan768] = useState(window.innerWidth < 768);

    let height = "";
    let right = "";

    // Calculate height based on screen width
    if (isLargerThan1024) {
        height = "85vh";
        right = "-3.5%"
    } else {
        if (isSmallThan768) {
            height = "60vh";
            right = "-12%";
        } else {
            height = "70vh"; 
            right = "-5%"
        }
    }

    const handleResize = () => {
        setIsLargerThan1024(window.innerWidth > 1024);
        setIsSmallThan768(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            className="header"
            style={{
                width: "100%",
                height: "fit-content",
                maxWidth: "1560px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Navbar />
            <div
                className="header_img"
                style={{
                    width: "100%",
                    height, // Dynamic height applied here
                    maxHeight: "610px",
                    margin: "50px 0px 20px",
                    backgroundColor: "#D9EDBF",
                    backgroundImage: isSmallThan768
                        ? `url(${mobile})`
                        : `url(${desktop})`,
                    backgroundSize: "cover",
                }}
            ></div>

            {!openEnquireNow && (
                <div
                    style={{
                        position: "fixed",
                        right,
                        top: "25%",
                        transform: "translateY(-50%) rotate(-90deg)",
                        cursor: "pointer",
                        zIndex: 9,
                    }}
                >
                    <button
                        onClick={() => setOpenEnquireNow(true)}
                        style={{
                            border: "none",
                            borderRadius: "5px",
                            padding: "8px 20px 12px 20px",
                            backgroundColor: "#FF9800",
                            fontSize: "16px",
                            color: "white",
                        }}
                    >
                        Enquire Now
                    </button>
                </div>
            )}

            {openEnquireNow && <EnquireNow closeEnquireNow={setOpenEnquireNow} />}
        </div>
    );
}

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import elevation from "../../../asset/elevation.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Section1() {
    const [isLargerThan1024, setIsLargerThan1024] = useState(window.innerWidth > 1024);
    const [isSmallThan768, setIsSmallThan768] = useState(window.innerWidth < 768);

    // Determine the width based on screen size
    const width = isLargerThan1024 ? "400px" : isSmallThan768 ? "80%" : "50%";

    // Handle resize events
    const handleResize = () => {
        setIsLargerThan1024(window.innerWidth > 1024);
        setIsSmallThan768(window.innerWidth < 768);
    };

    useEffect(() => {
        // Add event listener for resize
        window.addEventListener('resize', handleResize);
        return () => {
            // Clean up event listener on component unmount
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const ref = useRef();
    const ref1 = useRef();
    const ref2 = useRef();

    useEffect(() => {
        const el = ref.current;
        if (el) {
            gsap.fromTo(el, 
                { opacity: 0, y: -20 }, 
                { opacity: 1, scale: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: el, start: "top 80%", end: "top 70%", toggleActions: "play none none reverse" } }
            );
        }

        const el1 = ref1.current;
        if (el1) {
            gsap.fromTo(el1, 
                { opacity: 0, x: -100 }, 
                { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: el1, start: "top 60%", end: "top 30%", toggleActions: "play none none reverse" } }
            );
        }

        const el2 = ref2.current;
        if (el2) {
            gsap.fromTo(el2, 
                { opacity: 0, x: 100 }, 
                { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: el2, start: "top 65%", end: "top 30%", toggleActions: "play none none reverse" } }
            );
        }

    }, []);

    return (
        <div id="Overview" style={{ width: "100%", height: "fit-content", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0" }}>
            <h1 className="heading" ref={ref} style={{ fontSize: isSmallThan768 ? "28px" : "32px", color: "#FF9800", marginBottom: "20px" }}>
                Project Overview
            </h1>

            <div className="down-part" style={{ display: "flex", flexDirection: isLargerThan1024 ? "row" : "column", justifyContent: "center", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
                <div className="main_left" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img className="ov_img" ref={ref1} src={elevation} alt="Elevation" style={{ width, height: isLargerThan1024 ? "540px" : "auto", borderRadius: "8px" }} />
                </div>
                <div className="main_right" ref={ref2} style={{ width: isLargerThan1024 ? "35%" : "90%", height: "fit-content", backgroundColor: "#D9EDBF", padding: isSmallThan768 ? "10px" : "20px 40px", borderRadius: "10px" }}>
                    <p className="ov_pp" style={{ fontSize: isSmallThan768 ? "14px" : "16px", letterSpacing: isSmallThan768 ? "normal" : "0.2px", lineHeight: "1.3", color: "#2C7865", fontWeight: "500", textAlign: "justify" }}>
                        UVK Sai Akshi is a luxury residential apartment complex found at a prime location in Mumbai. The development consists of apartments with either 1 or 2 bedrooms, which take up a whole acre of ground. Customers who want an open flat house that has a premium-grade façade, a substantial amount of carpet space, and a breathtaking view may choose UVK Sai Akshi as their top choice. Because this residential development, which is part of the UVK Sai Akshi project, was built with all of the requirements of the modern day in mind, it is an excellent option.
                    </p>
                </div>
            </div>
        </div>
    );
}

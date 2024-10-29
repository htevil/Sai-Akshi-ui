import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import elevation from "../../../asset/elevation.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Section1() {
    const [isLargerThan1024, setIsLargerThan1024] = useState(window.innerWidth > 1024);
    const [isSmallThan768, setIsSmallThan768] = useState(window.innerWidth < 768);

    const width = isLargerThan1024 ? "400px" : isSmallThan768 ? "80%" : "50%";

    // Debounced resize handler to optimize performance
    useEffect(() => {
        const handleResize = () => {
            setIsLargerThan1024(window.innerWidth > 1024);
            setIsSmallThan768(window.innerWidth < 768);
        };

        const debouncedHandleResize = debounce(handleResize, 100);

        window.addEventListener("resize", debouncedHandleResize);
        return () => window.removeEventListener("resize", debouncedHandleResize);
    }, []);

    const ref = useRef();
    const ref1 = useRef();
    const ref2 = useRef();

    useEffect(() => {
        const el = ref.current;
        const el1 = ref1.current;
        const el2 = ref2.current;

        if (el) {
            gsap.fromTo(el,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: el, start: "top 80%", end: "top 70%", toggleActions: "play none none reverse" } }
            );
        }

        if (el1) {
            gsap.fromTo(el1,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: el1, start: "top 70%", end: "top 60%", toggleActions: "play none none reverse" } }
            );
        }

        if (el2) {
            gsap.fromTo(el2,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: el2, start: "top 70%", end: "top 60%", toggleActions: "play none none reverse" } }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, []);

    return (
        <div id="Overview" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", alignItems: "center", margin: "20px 0" }}>
            <h1 className="heading" ref={ref} style={{ fontSize: isSmallThan768 ? "28px" : "32px", color: "#FF9800", marginBottom: "20px" }}>
                Project Overview
            </h1>

            <div className="down-part" style={{ display: "flex", flexDirection: isLargerThan1024 ? "row" : "column", justifyContent: "center", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
                <div className="main_left" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img
                        className="ov_img"
                        ref={ref1}
                        src={elevation}
                        alt="Elevation"
                        loading="lazy"
                        style={{ width, height: isLargerThan1024 ? "540px" : "auto", borderRadius: "8px" }}
                    />
                </div>
                <div className="main_right" ref={ref2} style={{ width: isLargerThan1024 ? "40%" : "90%", backgroundColor: "#D9EDBF", padding: isSmallThan768 ? "10px" : "20px 40px", borderRadius: "10px" }}>
                    <p className="ov_pp" style={{ fontSize: isSmallThan768 ? "14px" : "16px", lineHeight: "1.3", color: "#2C7865", fontWeight: "500", textAlign: "justify" }}>
                        UVK Sai Akshi is a luxury residential apartment complex found at a prime location in Mumbai. The development consists of apartments with either 1 or 2 bedrooms, which take up a whole acre of ground. Customers who want an open flat house that has a premium-grade façade, a substantial amount of carpet space, and a breathtaking view may choose UVK Sai Akshi as their top choice. Because this residential development, which is part of the UVK Sai Akshi project, was built with all of the requirements of the modern day in mind, it is an excellent option.
                    </p>
                </div>
            </div>
        </div>
    );
}

// Utility function to debounce resize events
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

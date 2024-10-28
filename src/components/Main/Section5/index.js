import location from "../../../asset/location.jpg";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section5() {
    const [isLargerThan1024, setIsLargerThan1024] = useState(window.innerWidth > 1025);
    const [isSmallThan768, setIsSmallThan768] = useState(window.innerWidth < 768);

    let width = "";
    if (isLargerThan1024) {
        width = "35%"
    } else {
        if (isSmallThan768) {
            width = "80%"
        } else {
            width = "50%"
        }
    }

    const handleResize = () => {
        setIsLargerThan1024(window.innerWidth > 1024);
        setIsSmallThan768(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); };
    }, []);

    const ref = useRef();
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();

    useEffect(() => {
        const el = ref.current;
        if (el) {
            gsap.fromTo(el, 
                { opacity: 0, y: -20 }, 
                { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: el, start: "top 80%", end: "top 70%", toggleActions: "play none none reverse" } }
            );
        }

        const el1 = ref1.current;
        if (el1) {
            gsap.fromTo(el1, 
                { opacity: 0, x: -100 }, 
                { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: el1, start: "top 50%", end: "top 30%", toggleActions: "play none none reverse" } }
            );
        }

        const el2 = ref2.current;
        if (el2) {
            gsap.fromTo(el2, 
                { opacity: 0, x: 100 }, 
                { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: el2, start: "top 60%", end: "top 30%", toggleActions: "play none none reverse" } }
            );
        }

        // Adding stagger effect for list items
        const listItems = ref3.current.children;
        gsap.fromTo(listItems, 
            { opacity: 0, y: 20 }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                stagger: 0.2, // Adjust stagger duration here
                scrollTrigger: { 
                    trigger: ref3.current, 
                    start: "top 50%", 
                    end: "top 30%", 
                    toggleActions: "play none none reverse" 
                } 
            }
        );

    }, []);

    return (
        <div className="view" id="Location-Advantages" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0px" }}>
            <div className="top-part" ref={ref} style={{ marginBottom: "20px" }}>
                <h1 className="heading" style={{ fontSize: isSmallThan768 ? "28px" : "32px", color: "#2C7865" }}>Location Advantages</h1>
            </div>

            <div className="down-part" style={{ display: "flex", flexDirection: isLargerThan1024 ? "row" : "column", justifyContent: "center", alignItems: "center", gap: isLargerThan1024 ? "40px" : "20px" }}>
                <div className="main-left" ref={ref1} style={{ width }}>
                    <img src={location} alt="no-location" style={{ width: "100%", border: "none", borderRadius: "4px" }} />
                </div>
                <div className="main-right" style={{ width: isLargerThan1024 ? "50%" : "70%", fontSize: isSmallThan768 ? "14px" : "16px", letterSpacing: isSmallThan768 ? "" : "0.5px", lineHeight: "1.5", color: "#2C7865", textAlign: isSmallThan768 ? "" : "justify" }}>
                    <p ref={ref2}>
                        The project has easy access to public transport. The locality houses all the required basic necessities like banks, ATMs, malls, grocers, schools, hospitals, temples, mosques, etc.
                    </p>
                    <ul ref={ref3} style={{ listStyleType: 'disc', marginLeft: "20px" }}>
                        <style>
                            {`
                            ul li::marker {
                                color: #FF9800;
                            }
                            `}
                        </style>
                        <li>
                            <b style={{ color: "#FF9800", fontSize: isSmallThan768 ? "16px" : "18px" }}>Railway Station: </b>Bhandup and Nahur
                        </li>
                        <li>
                            <b style={{ color: "#FF9800", fontSize: isSmallThan768 ? "16px" : "18px" }}>Metro Station: </b>Shangrila and Bhandup
                        </li>
                        <li>
                            <b style={{ color: "#FF9800", fontSize: isSmallThan768 ? "16px" : "18px" }}>Schools: </b>Pawar Public School, National Education Society College and Kaveri
                        </li>
                        <li>
                            <b style={{ color: "#FF9800", fontSize: isSmallThan768 ? "16px" : "18px" }}>Hospitals: </b>Badwaik Hospital and FORTIS Hospital
                        </li>
                        <li>
                            <b style={{ color: "#FF9800", fontSize: isSmallThan768 ? "16px" : "18px" }}>Malls: </b>Magnet Mall and Neptune Mall
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

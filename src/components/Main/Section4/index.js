import React, {  useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Section4() {
    const [isLargerThan1024, setIsLargerThan1024] = useState(window.innerWidth > 1024);
    const [isSmallThan768, setIsSmallThan768] = useState(window.innerWidth < 768);

    let width = "";
    let height = "";
    // Calculate height based on screen width
    if (isLargerThan1024) {
        width = "60%";
        height = "70vh";
    } else {
        if (isSmallThan768) {
            width = "80%";
            height = "25vh";
        } else {
            width = "80%";
            height = "50vh";
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
    
    useEffect(() => {

        const el = ref.current;
        if (el) {
            gsap.fromTo(el, 
                { opacity: 0, y: -20 }, 
                { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: el, start: "top 80%", end: "top 70%", toggleActions: "play none none reverse" } }
            );
        }

        const el1 = ref1.current;
        if (el1) {
            gsap.fromTo(el1, 
                { opacity: 0, scale: 0.9}, 
                { opacity: 1, scale:1, duration: 0.8, scrollTrigger: { trigger: el1, start: "top 60%", end:"top 50%", toggleActions: "play none none reverse" } }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, []);

    return (
        <div className="view" id="Walkthrough" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "40px 0px 20px"}}>
            <div className="top-part" style={{ marginBottom:"20px" }}>
                <h1 className="heading"ref={ref} style={{ fontSize: isSmallThan768? "28px" : "32px", color: "#FF9800" }}>Walkthrough</h1>
            </div>
            <div className="down-part" ref={ref1} style={{ width:"100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <iframe
                    src="https://www.youtube.com/embed/no5-y_qERZc?si=H1d0Q7iRut17TXhT"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="walk_iframe"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ width, height, maxHeight:"500px", border: "none" }}>
                </iframe>
            </div>
        </div>
    );
}

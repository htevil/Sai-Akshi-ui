import uvklogo from "../../../asset/uvk-logo.png";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section6() {
    const [isSmallThan768, setIsSmallThan768] = useState(window.innerWidth < 768);


    const handleResize = () => {
        setIsSmallThan768(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); };
    }, []);

    const ref = useRef();
    const ref1 = useRef();
    const ref2 = useRef();

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
                { opacity: 0, scale:0.8 },
                { opacity: 1,  scale:1, duration: 0.5, scrollTrigger: { trigger: el1, start: "top 60%", end: "top 50%", toggleActions: "play none none reverse" } }
            );
        }


        const listItems = ref2.current.children;
        gsap.fromTo(listItems,
            { opacity: 0, y: 10 },
            {
                opacity: 1,
                y: 0,
                stagger:0.2,
                scrollTrigger: {
                    trigger: ref2.current,
                    start: "top 60%",
                    end: "top 50%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, []);


    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#D9EDBF", padding: "20px" }}>
            <div className="view" id="About-Developer" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div >
                    <h1 className="heading" ref={ref} style={{ fontSize: isSmallThan768 ? "28px" : "32px", color: "#FF9800", marginBottom: "10px" }}>About Developer</h1>
                </div>
                <div className="top-part" ref={ref1} style={{ marginBottom: "20px" }}>
                    <img src={uvklogo} alt="no-uvklogo" style={{ width: isSmallThan768 ? "120px" : "140px" }} />
                </div>
                <div ref={ref2} className="down-part" style={{ fontSize: isSmallThan768 ? "12px" : "16px", width: "70%", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px", letterSpacing: isSmallThan768 ? "" : "0.2px", lineHeight: "1.5", marginBottom: "5px" }}>
                    <p style={{ color: "#2C7865", fontWeight: "500", textAlign: "justify" }} >
                        UVK Group is one of the prominent real estate groups based in Mumbai, Maharashtra. Formed in 2010, our group's core business is the development of residential and commercial projects catering to Redevelopment Projects, Slum Rehabilitation Projects, and other Housing Projects in and around Mumbai. We specialize in building sustainable projects with superior quality and elegance. We have the core expertise and technical know-how that helps in executing projects in a better way.
                    </p>
                    <p style={{ color: "#2C7865", fontWeight: "500", textAlign: "justify" }}>
                        Our team of consultants streamlines the entire value chain and process of the journey of providing you with happy homes. Our team specializes in liaising with owners, tenants, customers, suppliers, regulatory bodies, etc., which enables timely completion of projects. In the last two years, we are proud to inform you that we have added many new land banks and residential projects to our portfolio, which would take the UVK Group to new heights. We are UVK - We unlock Value and timely deliver Keys.
                    </p>
                </div>
            </div>
        </div>
    );
}

import { useState, useEffect } from "react";

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
            width = "90%";
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

    return (
        <div className="view" id="Walkthrough" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px, 0px"}}>
            <div className="top-part" style={{ animation: "h1 linear", animationTimeline: "view()", animationRange: "entry 10% cover" }}>
                <h1 className="heading" style={{ fontSize: isSmallThan768? "28px" : "32px", color: "#FF9800" }}>Walkthrough</h1>
            </div>
            <div className="down-part" style={{ width:"100%", display: "flex", justifyContent: "center", alignItems: "center", animation: "h2 linear", animationTimeline: "view()", animationRange: "entry 0% " }}>
                <iframe
                    src="https://www.youtube.com/embed/no5-y_qERZc?si=H1d0Q7iRut17TXhT"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="walk_iframe"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ width, height, border: "none" }}>
                </iframe>
            </div>
        </div>
    );
}

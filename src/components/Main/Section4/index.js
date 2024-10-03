export default function Section4() {
    return (
        <div id="Walkthrough" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1 className="s4-heading" style={{ fontSize: "32px", color:"#2C7865" }}>Walkthrough</h1>
            <div className="main_div" style={{ margin: "20px" }}>
                <iframe
                    src="https://www.youtube.com/embed/no5-y_qERZc?si=H1d0Q7iRut17TXhT"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="walk_iframe"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ width:"1000px", height:"550px", border:"none"}}>
                </iframe>
            </div>
        </div>
    );
}

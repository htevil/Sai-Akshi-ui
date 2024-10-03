export default function Section4() {
    return (
        <div className="Walkthrough" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0px" }}>
            <h1 className="s4-heading" style={{ fontSize: "28px", marginBottom: "20px" }}>Walkthrough</h1>
            <div className="main_div" style={{ margin: "20px" }}>
                <iframe
                    src="https://www.youtube.com/embed/no5-y_qERZc?si=H1d0Q7iRut17TXhT"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="walk_iframe"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ width:"800px", height:"450px"}}>
                </iframe>
            </div>
        </div>
    );
}

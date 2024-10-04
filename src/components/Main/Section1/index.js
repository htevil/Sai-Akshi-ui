import elevation from "../../../asset/elevation.jpg";


export default function Section1() {
    return (
        <div className="S1" id="Overview" style={{ width: "100%", height:"fit-content", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center",alignItems: "center", }}>
            <h1 className="s1-heading" style={{ fontSize: "32px",color:"#FF9800", animation:"h1 linear", animationTimeline:"view()", animationRange:"entry 0%" }} >
                Project Overview
            </h1>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "0px 200px", marginBottom:"20px" }}>
                <div className="s1-main_left">
                    <img className="ov_img" src={elevation} alt="no_elevation"  style={{ width: "420px", height:"560px", borderRadius:"12px", animation:"m1 linear", animationTimeline:"view()", animationRange:"entry 0%" }} />
                </div>
                <div className="s2-main_right" style={{ width:"100%", height:"fit-content", backgroundColor:"#D9EDBF", padding:"50px 50px 50px 75px", borderRadius:"0px 12px 12px 0px", animation:"m2 linear", animationTimeline:"view()", animationRange:"entry 0%"}}>
                    <span className="ov_pp" style={{ fontSize:"16px", letterSpacing:"0.5px", lineHeight:"1.5",color:"#2C7865", fontWeight:"500"}}>
                        UVK Sai Akshi is a luxury residential apartment complex found at a prime location in Mumbai.
                        The development consists of apartments with either 1 or 2 bedrooms, which take up a whole acre of ground.
                        Customers who want an open flat house that has a premium-grade façade, a substantial amount of carpet space,
                        and a breathtaking view may choose UVK Sai Akshi as their top choice. Because this residential development,
                        which is part of the UVK Sai Akshi project, was built with all of the requirements of the modern day in mind,
                        it is an excellent option.
                    </span>
                </div>
            </div>
        </div>
    );
}

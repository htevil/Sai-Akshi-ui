import elevation from "../../../asset/elevation.jpg";


export default function Section1() {
    return (
        <div className="view" id="Overview" style={{ width: "100%", height: "fit-content", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
            <div  className="top-part" style={{animation: "h1 linear", animationTimeline: "view()", animationRange: "entry 10% cover"}}>
                <h1 className="heading" style={{ fontSize: "32px", color: "#FF9800",  }} >
                    Project Overview
                </h1>
            </div>

            <div className="down-part" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
                <div className="main_left">
                    <img className="ov_img" src={elevation} alt="no_elevation" style={{ width: "380px", height: "540px", borderRadius: "12px", animation: "m1 linear", animationTimeline: "view()", animationRange: "entry 0%" }} />
                </div>
                <div className="main_right" style={{ width: "35%", height: "fit-content", backgroundColor: "#D9EDBF", padding: "25px 50px", borderRadius: "12px", animation: "m2 linear", animationTimeline: "view()", animationRange: "entry 0%" }}>
                    <span className="ov_pp" style={{ fontSize: "16px", letterSpacing: "0.5px", lineHeight: "1.5", color: "#2C7865", fontWeight: "500", textAlign:"justify" }}>
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

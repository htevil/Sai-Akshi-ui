import elevation from "../../../asset/elevation.jpg";


export default function Section1() {
    return (
        <div className="Overview" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0px" }}>
            <h1 className="s1-heading" style={{ fontSize: "26px" }} >
                Project Overview
            </h1>
            <div className="main_div" style={{margin: "20px 0px", display: "flex", justifyContent: "center", alignItems: "center",gap:"75px", padding: "0px 150px" }}>
                <div className="main_left" style={{}}>
                    <img src={elevation} alt="no_elevation" className="elev" style={{ width: "460px" }} />
                </div>
                <div className="main_right">
                    <span className="ov_pp" style={{ fontSize:"18px", letterSpacing:"0.5px", lineHeight:"1.5"}}>
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

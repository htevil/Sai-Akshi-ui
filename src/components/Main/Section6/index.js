import uvklogo from "../../../asset/uvk-logo.png";
import React from 'react';

export default function Section6() {
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#D9EDBF" }}>
            <div className="view" id="About-Developer" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div >
                    <h1 className="heading" style={{ fontSize: "32px", color: "#FF9800" }}>About Developer</h1>
                </div>

                <div className="top-part" style={{animation: "h1 linear", animationTimeline: "view()", animationRange: "entry 10% "  }}>
                    <img src={uvklogo} alt="no-uvklogo" style={{ width: "140px", marginBottom: "20px", }} />
                </div>

                <div className="down-part" style={{ width:"70%", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "16px", letterSpacing: "0.2px", lineHeight: "1.5", marginBottom: "20px",animation: "m4 linear", animationTimeline: "view()", animationRange: "entry 10% cover" }}>
                    <p style={{ color: "#2C7865", fontWeight: "500" }} >
                        UVK Group is one of the prominent real estate groups based in Mumbai, Maharashtra. Formed in 2010, our group's core business is the development of residential and commercial projects catering to Redevelopment Projects, Slum Rehabilitation Projects, and other Housing Projects in and around Mumbai. We specialize in building sustainable projects with superior quality and elegance. We have the core expertise and technical know-how that helps in executing projects in a better way.
                    </p>
                    <p style={{ color: "#2C7865", fontWeight: "500"}}>
                        Our team of consultants streamlines the entire value chain and process of the journey of providing you with happy homes. Our team specializes in liaising with owners, tenants, customers, suppliers, regulatory bodies, etc., which enables timely completion of projects. In the last two years, we are proud to inform you that we have added many new land banks and residential projects to our portfolio, which would take the UVK Group to new heights. We are UVK - We unlock Value and timely deliver Keys.
                    </p>
                </div>
            </div>
        </div>
    );
}

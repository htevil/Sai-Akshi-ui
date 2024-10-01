import uvklogo from "../../../asset/uvk-logo.png";
import React from 'react';

export default function Section6() {
    return (
        <div className="About-Developer" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0px" }}>
            <h1 className="s6-heading" style={{ fontSize: "28px", marginBottom: "10px" }}>About Developer</h1>
            <div className="main_div" style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px 150px" }}>
                <img src={uvklogo} alt="no-uvklogo" style={{ width: "200px", marginBottom:"20px" }} />
                <div style={{ fontSize: "18px", letterSpacing: "0.5px", lineHeight: "1.5" }}>
                    <p className="dev_p sal-animate" data-sal="slide-up" data-sal-duration="1200" data-sal-delay="200" data-sal-easing="ease-out-back">
                        UVK Group is one of the prominent real estate groups based in Mumbai, Maharashtra. Formed in 2010, our group's core business is the development of residential and commercial projects catering to Redevelopment Projects, Slum Rehabilitation Projects, and other Housing Projects in and around Mumbai. We specialize in building sustainable projects with superior quality and elegance. We have the core expertise and technical know-how that helps in executing projects in a better way.
                    </p>
                    <p className="dev_p sal-animate" data-sal="slide-up" data-sal-duration="1200" data-sal-delay="200" data-sal-easing="ease-out-back">
                        Our team of consultants streamlines the entire value chain and process of the journey of providing you with happy homes. Our team specializes in liaising with owners, tenants, customers, suppliers, regulatory bodies, etc., which enables timely completion of projects. In the last two years, we are proud to inform you that we have added many new land banks and residential projects to our portfolio, which would take the UVK Group to new heights. We are UVK - We unlock Value and timely deliver Keys.
                    </p>

                </div>

            </div>
        </div>
    );
}

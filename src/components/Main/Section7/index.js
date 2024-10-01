import React from 'react';
import gps1 from "../../../asset/gps1.png";
import qr from "../../../asset/qr.jpg";
import maharera from "../../../asset/maharera.png";

export default function Section7() {
    return (
        <div className="Enquire-Now" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0px" }}>
            <div className="main_div" style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"50px"}}>
                <div className="main_left">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.316096398398!2d72.92622697411656!3d19.14631054976364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b954c8aae4bd%3A0x9718ae424bb9f34a!2sSAI%20AKSHI!5e1!3m2!1sen!2sin!4v1727162570690!5m2!1sen!2sin"
                        className="maps_iframe"
                        style={{ border: '0', width:"600px", height:"600px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sai Akshi Location Map"  // Added title attribute
                    ></iframe>
                </div>
                <div className="main_right" >
                    <form id="bot_form" className="bot_form" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <h1 className="s7-heading">Enquire Now
                        </h1>
                        <p className="enq_pp">Please fill your details below</p>

                        <input type="hidden" value="" name="soc_url" id="soc_url" />
                        <input type="hidden" value="" name="medium" />
                        <input type="hidden" value="" name="campaign" />
                        <p className="bot_msg" style={{ float: 'left', position: 'relative', width: '100%', color: 'red' }}></p>

                        <input type="text" className="bot_inp username sal-animate" name="name" placeholder="Name*" data-sal="slide-up" data-sal-duration="1200" data-sal-delay="200" data-sal-easing="ease-out-back" />
                        <input type="text" className="bot_inp useremail sal-animate" name="email" placeholder="Email*" data-sal="slide-up" data-sal-duration="1200" data-sal-delay="200" data-sal-easing="ease-out-back" id="emailid1" />
                        <input type="text" className="bot_inp usermobile sal-animate" name="mobile" placeholder="Mobile*" data-sal="slide-up" data-sal-duration="1200" data-sal-delay="200" data-sal-easing="ease-out-back" />

                        <select name="info" className="bot_inp sal-animate" data-sal="slide-up" data-sal-duration="1200" data-sal-delay="200" data-sal-easing="ease-out-back">
                            <option value="" disabled>Select Configuration</option>
                            <option value="1 BHK">1 BHK</option>
                            <option value="2 BHK">2 BHK</option>
                            <option value="3 BHK">3 BHK</option>
                        </select>

                        <div className="bot_sub_div sal-animate" data-sal="slide-up" data-sal-duration="1200" data-sal-delay="200" data-sal-easing="ease-out-back">
                            <input type="button" className="bot_sub" value="Submit" />
                        </div>

                        <p className="site_addr sal-animate" data-sal="slide-up" data-sal-duration="1200" data-sal-delay="200" data-sal-easing="ease-out-back">
                            <img src={gps1} style={{ width: '25px', marginRight: '5px' }} alt="no_gps1" />
                            <b>Site Address:</b> Kokan Nagar, Bhandup West, Mumbai, Maharashtra 400078
                        </p>
                        <p className="site_addr sal-animate" data-sal="slide-up" data-sal-duration="1200" data-sal-delay="200" data-sal-easing="ease-out-back">
                            <img src={qr} style={{ width: '25px', marginRight: '5px', zIndex: 9, cursor: 'pointer' }} alt="no_qr" data-toggle="modal" data-target="#rera-gr" />
                            <img src={maharera} style={{ width: '25px', marginRight: '5px' }} alt="no_maharera" />
                            <b>MahaRERA Registration No.:</b> P51800030330
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

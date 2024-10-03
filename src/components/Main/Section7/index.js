import React from 'react';
import gps1 from "../../../asset/gps1.png";
import qr from "../../../asset/qr.jpg";
import maharera from "../../../asset/maharera.png";

export default function Section7() {
    return (
        <div className="Enquire-Now" style={{ width: "100%", maxWidth: "1560px", display: "flex", justifyContent: "center", alignItems: "center", gap: "40px", margin: "20px 0px 10px 0px", }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.316096398398!2d72.92622697411656!3d19.14631054976364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b954c8aae4bd%3A0x9718ae424bb9f34a!2sSAI%20AKSHI!5e1!3m2!1sen!2sin!4v1727162570690!5m2!1sen!2sin"
                className="maps_iframe"
                style={{ border: '0', width: "600px", height: "500px", borderRadius: "8px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sai Akshi Location Map"
            ></iframe>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "15px", border: "3px solid orange", padding: "20px", borderRadius: "8px", }} >
                <div style={{ display: "flex", textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px", margin:"10px 0px" }}>
                    <span style={{ fontSize: "22px", fontWeight: "600" }}>Enquire Now</span>
                    <span style={{ fontSize: "16px", fontWeight: "400" }}>Please fill your details below</span>
                </div>
                <form style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px", padding: "5px 0px" }}>
                    <input type="text" className="username" name="name" placeholder="Name*" style={{ width: "92%", padding: "8px 16px", borderRadius:"4px", fontSize:"16px" }} />
                    <input type="text" className="useremail" name="email" placeholder="Email*" style={{ width: "92%", padding: "8px 16px", borderRadius:"4px", fontSize:"16px" }} />
                    <input type="text" className="usermobile" name="mobile" placeholder="Mobile*" style={{ width: "92%", padding: "8px 16px", borderRadius:"4px", fontSize:"16px" }} />
                    <select name="info" className="form-control" style={{ width: "98%", padding: "8px 16px", borderRadius:"4px" }}>
                        <option value="" disabled>Select Configuration</option>
                        <option value="1 BHK">1 BHK</option>
                        <option value="2 BHK">2 BHK</option>
                        <option value="3 BHK">3 BHK</option>
                    </select>
                    <input type="button" name="submit" value="Submit" />
                </form>

                <div style={{fontSize:"16px"}}>
                    <img src={gps1} style={{ width: '25px', marginRight: '5px' }} alt="no_gps1" />
                    <b>Site Address:</b> Kokan Nagar, Bhandup West, Mumbai, Maharashtra 400078
                </div>
                <div style={{marginBottom:"10px", display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center", fontSize:"16px"}}>
                    <img src={qr} style={{ width: '25px', marginRight: '5px', zIndex: 9, cursor: 'pointer' }} alt="no_qr" data-toggle="modal" data-target="#rera-gr" />
                    <img src={maharera} style={{ width: '25px', marginRight: '5px' }} alt="no_maharera" />
                    <b>MahaRERA Registration No: </b> P51800030330
                </div>
            </div>
        </div>
    );
}

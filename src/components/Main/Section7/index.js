import React, { useState, useEffect } from 'react';
import gps1 from "../../../asset/gps1.png";
import qr from "../../../asset/qr.jpg";
import maharera from "../../../asset/maharera.png";
import bg from "../../../asset/bg.jpg";
import { useForm } from 'react-hook-form';

export default function Section7() {
    const [isLargerThan1024, setIsLargerThan1024] = useState(window.innerWidth > 1024);
    const [isSmallThan768, setIsSmallThan768] = useState(window.innerWidth < 768);
    const [modalVisible, setModalVisible] = useState(false);  // Modal state

    let width = isLargerThan1024 ? "35%" : isSmallThan768 ? "80%" : "60%";

    const handleResize = () => {
        setIsLargerThan1024(window.innerWidth > 1024);
        setIsSmallThan768(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); };
    }, []);

    const { register, formState: { errors }, handleSubmit, reset, clearErrors } = useForm({ mode: "onChange", });

    const onSubmit = (data) => {
        console.log(data);  // Log data as object
        setModalVisible(true);  // Show success modal
        reset();  // Reset the form
        clearErrors();  // Clear validation errors
    };

    return (
        <div style={{ width: "100%", height: '900px', display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#D9EDBF", backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
            <div id="Enquire-Now" style={{ width: "100%", height: "100%", maxWidth: "1560px", display: "flex", flexDirection: isLargerThan1024 ? "row" : "column", justifyContent: "center", alignItems: "center", gap: isLargerThan1024 ? "40px" : "20px" }}>
                <div className="top-part" style={{ width, maxWidth: "500px", height: isLargerThan1024 ? "60%" : "30%" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.316096398398!2d72.92622697411656!3d19.14631054976364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b954c8aae4bd%3A0x9718ae424bb9f34a!2sSAI%20AKSHI!5e1!3m2!1sen!2sin!4v1727162570690!5m2!1sen!2sin"
                        className="maps_iframe"
                        style={{ border: '0', width: "100%", height: "100%", borderRadius: "2px", animation: "m1 linear", animationTimeline: "view()", animationRange: "entry 0%" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sai Akshi Location Map"
                    ></iframe>
                </div>
                <div className="down-part" style={{ width, maxWidth: "480px", height: "fit-content", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "15px", border: "2px solid #FF9800", padding: isLargerThan1024 ? "30px 20px" : "20px 10px" }}>
                    <div className='heading' style={{ display: "flex", textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: isSmallThan768 ? "10px" : "20px", marginBottom: isSmallThan768 ? "5px" : "10px" }}>
                        <span style={{ fontSize: isSmallThan768 ? "18px" : "24px", fontWeight: "600", color: "#FF9800" }}>Enquire Now</span>
                        <span style={{ fontSize: isSmallThan768 ? "14px" : "16px", fontWeight: "400", color: "white" }}>Please fill your details below</span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: isLargerThan1024 ? "20px" : "10px", margin: "5px 10px 10px 10px", padding: isSmallThan768 ? "0px 10px" : "0px 20px" }}>
                        <input
                            type="text"
                            className="username"
                            name="name"
                            placeholder="Name*"
                            {...register("name", { required: true, pattern: /^[a-zA-Z\s]+$/i })}
                            style={{ width: "100%", padding: "10px", borderRadius: "5px", fontSize: "16px" }}
                        />
                        {errors.name?.type === "required" && <span style={{ color: "red", fontSize: "10px", textAlign: "left", width: "100%", lineHeight: "0.2", fontWeight: "500" }}>- Name is required</span>}
                        {errors.name && errors.name?.type !== "required" && <span style={{ color: "red", fontSize: "10px", textAlign: "left", width: "100%", lineHeight: "0.2", fontWeight: "500" }}>- Name must be letters only</span>}

                        <input
                            type="text"
                            className="useremail"
                            name="email"
                            placeholder="Email*"
                            {...register("email", {
                                required: true,
                                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i
                            })}
                            style={{ width: "100%", padding: "10px", borderRadius: "5px", fontSize: "16px" }}
                        />
                        {errors.email?.type === "required" && <span style={{ color: "red", fontSize: "10px", textAlign: "left", width: "100%", lineHeight: "0.2", fontWeight: "500" }}>- Email is required</span>}
                        {errors.email && errors.email?.type !== "required" && <span style={{ color: "red", fontSize: "10px", textAlign: "left", width: "100%", lineHeight: "0.2", fontWeight: "500" }}>- Entered email is in wrong format</span>}


                        <input
                            type="number"
                            className="usermobile"
                            name="mobile"
                            placeholder="Mobile*"
                            {...register("mobile", {
                                required: true,
                                minLength: 10,
                                maxLength: 10,
                            })}
                            style={{ width: "100%", padding: "10px", borderRadius: "5px", fontSize: "16px", lineHeight: "0", fontWeight: "500" }}
                        />
                        {errors.mobile?.type === "required" && <span style={{ color: "red", fontSize: "10px", textAlign: "left", width: "100%", lineHeight: "0.2", fontWeight: "500" }}>- Mobile is required</span>}
                        {errors.mobile && errors.mobile?.type !== "required" && <span style={{ color: "red", fontSize: "10px", textAlign: "left", width: "100%", lineHeight: "0.2", fontWeight: "500" }}>- Mobile number must be 10 digits</span>}
                        <select
                            name="configure"
                            defaultValue=""
                            className="form-control"
                            {...register("configure", { required: true })}
                            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
                        >
                            <option value="" disabled>Select Configuration</option>
                            <option value="1 BHK">1 BHK</option>
                            <option value="2 BHK">2 BHK</option>
                            <option value="3 BHK">3 BHK</option>
                        </select>
                        {errors.configure?.type === "required" && <span style={{ color: "red", fontSize: "10px", textAlign: "left", width: "100%", lineHeight: "0.2", fontWeight: "500" }}>- Select any configuration</span>}

                        <input
                            type="submit"
                            className="submitbtn"
                            name="submit"
                            value="Submit"
                            style={{ padding: "10px 20px", border: "none", borderRadius: "5px", backgroundColor: "#FF9800", marginTop: "5px", fontSize: "16px", fontWeight: "600", color: "#ffffff" }}
                        />
                    </form>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: isSmallThan768 ? "2px" : '5px', fontSize: isSmallThan768 ? "12px" : "14px", color: "#fff" }}>
                        <img src={gps1} style={{ width: isSmallThan768 ? "22px" : '24px', }} alt="no_gps1" />
                        <span style={{ width: "110px", color: "#FF9800" }}><b>Site Address: </b></span>
                        <span style={{ alignSelf: "flex-end" }}>Kokan Nagar, Bhandup West, Mumbai, Maharashtra 400078</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <img src={qr} style={{ width: '25px', marginRight: '5px', zIndex: 9, cursor: 'pointer' }} alt="no_qr" data-toggle="modal" data-target="#rera-gr" />
                        <img src={maharera} style={{ width: '25px', marginRight: '5px' }} alt="no_maharera" />
                        <span style={{ color: "white", fontSize: isSmallThan768 ? "10px" : "14px" }}><b style={{ color: "#FF9800", fontSize: isSmallThan768 ? "12px" : "14px" }}>MahaRERA Registration No: </b> P51800030330</span>
                    </div>
                </div>


                {modalVisible && (
                    <div style={{ position: 'fixed', top: '10%', left: '50%', width: isSmallThan768 ? "300px" : "400px", transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0,0,0,0.8)', padding: '20px', borderRadius: '10px', zIndex: 1000, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                        <h2 style={{ fontSize: isSmallThan768 ? "16px" : "20px", marginBottom: "10px", color: "#fff", width: "100%" }}>Form Submitted Successfully!</h2>
                        <button onClick={() => setModalVisible(false)}
                            style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#FF9800', color: 'white', fontWeight: 'bold' }}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
}


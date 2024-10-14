import { useState, useEffect } from "react";
import close from "../../../asset/close.png";
import { useForm } from 'react-hook-form';

export default function EnquireNow({ closeEnquireNow }) {
    const [modalVisible, setModalVisible] = useState(false);  // Modal state
    const [isSmallThan768, setIsSmallThan768] = useState(window.innerWidth < 768);
    
    const handleResize = () => {
        setIsSmallThan768(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); };
    }, []);

    const [closeUpdate, setCloseUpdate] = useState(false);
    
    const handleEnquireNow = () => {
        setCloseUpdate(true); // Start closing animation
        setTimeout(() => {
            closeEnquireNow(false); // Close modal after animation finishes
        }, 400); // Adjust the timeout to match animation duration
    };

    const { register, formState: { errors }, handleSubmit, reset, clearErrors } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);  // Log data as object
        setModalVisible(true);  // Show success modal
        reset();  // Reset the form
        clearErrors();  // Clear validation errors
    };

    return (
        <>
            <div className={`EnquireNow ${closeUpdate ? 's2' : 's1'}`} 
                 style={{
                     width: isSmallThan768 ? "80%" : "100%", 
                     maxWidth: "320px", 
                     position: "fixed", 
                     right: "20px", 
                     top: isSmallThan768 ? "20%" : "45%", 
                     display: "flex", 
                     flexDirection: "column", 
                     justifyContent: "center", 
                     alignItems: "center", 
                     padding: "20px", 
                     backgroundColor: "#FF9800", 
                     zIndex: 15, 
                     border: "2px solid black", 
                     borderRadius: "6px", 
                     animation: closeUpdate ? "s2 0.5s ease-in-out" : "s1 0.5s ease-in",
                 }}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
                    <span style={{ width: "70%", fontSize: "18px", display: "flex", justifyContent: "flex-end", alignItems: "center", fontWeight: "700" }}>Enquire Now</span>
                    <span style={{ width: "30%", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                        <button onClick={handleEnquireNow} style={{ backgroundColor: "transparent", border: "none" }}>
                            <img src={close} alt="no_close" style={{ width: "16px" }} />
                        </button>
                    </span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} 
                      style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", margin: "10px" }}>
                    <input type="text" name="name" placeholder="Name*" 
                           {...register("name", { required: true, pattern: /^[a-zA-Z\s]+$/i })} 
                           style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "none" }} />
                    {errors.name?.type === "required" && <span style={{ color: "#000000", fontSize:"10px", textAlign:"left", width:"100%" }} >Name is required</span>}
                    {errors.name && <span style={{ color: "#000000", fontSize: "10px", textAlign: "left", width: "100%" }}>Name should not contain numbers or special characters</span>}
                    
                    <input type="text" name="email" placeholder="Email*" 
                           {...register("email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i })} 
                           style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "none" }} />
                    {errors.email?.type === "required" && <span style={{ color: "#000000", fontSize:"10px", textAlign:"left", width:"100%" }} >Email is required</span>}
                    {errors.email && <span style={{ color: "#000000", fontSize: "10px", textAlign: "left", width: "100%" }}>Entered email is in wrong format</span>}
                    
                    <input type="text" name="mobile" placeholder="Mobile*" 
                           {...register("mobile", { required: true, minLength: 10, maxLength: 10 })} 
                           style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "none" }} />
                    {errors.mobile?.type === "required" && <span style={{ color: "#000000", fontSize:"10px", textAlign:"left", width:"100%" }} >Mobile is required</span>}
                    {errors.mobile && <span style={{ color: "#000000", fontSize: "10px", textAlign: "left", width: "100%" }}>Mobile number must be 10 digits</span>}
                    
                    <select name="configure" defaultValue=""  
                            {...register("configure", { required: true })} 
                            style={{ width: "100%", padding: "10px", borderRadius: "5px" }} >
                        <option value="" disabled>Select Configuration</option>
                        <option value="1 BHK">1 BHK</option>
                        <option value="2 BHK">2 BHK</option>
                        <option value="3 BHK">3 BHK</option>
                    </select>
                    {errors.configure?.type === "required" && <span style={{ color: "#000000", fontSize:"10px", textAlign:"left", width:"100%" }} >Select any configuration</span>}
                    {errors.configure && <span style={{ color: "#000000", fontSize: "10px", textAlign: "left", width: "100%" }}>Configuration is required</span>}
                    
                    <input type="submit" name="submit" value="Submit" 
                           style={{ padding: "8px 16px", color: "#ffffff", fontWeight: "500", borderRadius: "6px", border: "none", backgroundColor: "#000000" }} />
                </form>
                <span style={{ fontSize: "12px", textAlign: "center" }}>
                    By submitting details, I agree and authorize Sai Akshi to contact me. This will override the registry with DNC/NDNC.
                </span>
            </div>
            
            {modalVisible && (
                <div style={{ position: 'fixed', top: '10%', left: '50%', width:isSmallThan768? "300px":"500px", transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0,0,0,0.8)', padding: '20px', borderRadius: '10px', zIndex: 1000, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign:"center" }}>
                    <h2 style={{ fontSize: isSmallThan768? "16px" : "32px", marginBottom: "10px", color: "#fff",width:"100%" }}>Form Submitted Successfully!</h2>
                    <button onClick={() => setModalVisible(false)} 
                            style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#FF9800', color: 'white', fontWeight: 'bold' }}>Close</button>
                </div>
            )}
        </>
    );
}

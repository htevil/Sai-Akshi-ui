import { useState } from "react";
import close from "../../../asset/close.png";

export default function EnquireNow({ closeEnquireNow }) {
    const [closeUpdate, setCloseUpdate] = useState(false);

    const handleEnquireNow = () => {
        setCloseUpdate(true); // Start closing animation
        setTimeout(() => {
            closeEnquireNow(false); // Close modal after animation finishes
        }, 400); // Adjust the timeout to match animation duration
    };

    return (
        <div
            className={`EnquireNow ${closeUpdate ? 's2' : 's1'}`}
            style={{
                width: "16%",
                position: "fixed",
                right: "0.5%",
                top: "45%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "15px",
                backgroundColor: "#FF9800",
                zIndex: 15,
                border: "2px solid black",
                borderRadius: "6px",
                animation: closeUpdate ? "s2 0.5s ease-in-out" : "s1 0.5s ease-in",
            }}
        >
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ width: "70%", fontSize: "18px", display: "flex", justifyContent: "flex-end", alignItems: "center", fontWeight: "700" }}>Enquire Now</span>
                <span style={{ width: "30%", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                    <button onClick={handleEnquireNow} style={{ backgroundColor: "transparent", border: "none" }}>
                        <img src={close} alt="no_close" style={{ width: "16px" }} />
                    </button>
                </span>
            </div>
            <form style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "12px", margin: "10px" }}>
                <input type="text" name="name" placeholder="Name*" style={{ width: "94%", padding: "8px", borderRadius: "4px", border: "none" }} />
                <input type="text" name="email" placeholder="Email*" style={{ width: "94%", padding: "8px", borderRadius: "4px", border: "none" }} />
                <input type="text" name="mobile" placeholder="Mobile*" style={{ width: "94%", padding: "8px", borderRadius: "4px", border: "none" }} />
                <select name="info" defaultValue="" style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "none" }}>
                    <option value="" disabled>Select Configuration</option>
                    <option value="1 BHK">1 BHK</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                </select>
                <input type="button" name="submit" value="Submit" style={{ padding: "6px 12px", borderRadius: "6px", border: "none" }} />
            </form>
            <span style={{ fontSize: "12px", textAlign: "center" }}>
                By submitting details, I agree and authorize Sai Akshi to contact me. This will override the registry with DNC/NDNC.
            </span>
        </div>
    );
}

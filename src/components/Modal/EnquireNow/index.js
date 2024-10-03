export default function EnquireNow({ closeEnquireNow }) {
    return (
        <div className="EnquireNow" style={{ position: "fixed",right: "0",top: "45%", width: "15%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "10px", backgroundColor:"orange", index:"15px" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center",padding:"5px" }}>
                <span style={{ width: "70%", fontSize:"16px", display: "flex", justifyContent: "flex-end", alignItems: "center"  }}>Enquire Now</span>
                <span style={{ width: "30%", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                    <button onClick={() => closeEnquireNow(false)} style={{backgroundColor:"transparent", border:"none", fontSize:"20px"}}>x</button>
                </span>
            </div>
            <form style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", padding: "5px 0px" }}>
                <input type="text" className="username" name="name" placeholder="Name*" style={{ width: "92%", padding: "5px 8px" }} />
                <input type="text" className="useremail" name="email" placeholder="Email*" style={{ width: "92%", padding: "5px 8px" }} />
                <input type="text" className="usermobile" name="mobile" placeholder="Mobile*" style={{ width: "92%", padding: "5px 8px" }} />
                <select name="info" className="form-control" style={{ width: "100%", padding: "5px 8px" }}>
                    <option value="" disabled>Select Configuration</option>
                    <option value="1 BHK">1 BHK</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                </select>
                <input type="button" name="submit" value="Submit" />
            </form>
            <span style={{ fontSize: "12px", textAlign: "center" }}>
                By submitting details, I agree and authorize Sai Akshi to contact me. This will override the registry with DNC/NDNC.
            </span>

        </div>
    );
}

import desktop from "../../asset/desktop.jpg";
import Navbar from "../navbar";

export default function Header() {
    return (
        <div className="header" style={{ width: "100%", maxWidth: "1560px", marginBottom:"20px" }}>
            <Navbar />
            <div style={{width:"100%"}}>
                <img src={desktop} alt="no_desktop" style={{width:"100%"}} />
            </div>
        </div>
    );
}
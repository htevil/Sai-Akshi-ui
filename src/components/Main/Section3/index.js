import React from 'react';
import plan1 from "../../../asset/plan1.jpg";
import plan2 from "../../../asset/plan2.jpg";
import plan3 from "../../../asset/plan3.jpg";
import plan4 from "../../../asset/plan4.jpg";
import next from "../../../asset/next.svg";
import prev from "../../../asset/prev.svg";

export default function Plans() {
    return (
        <div className="Plan" style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0px" }}>
            <h1 className="s3-heading" style={{fontSize:"28px", marginBottom:"20px"}}>Plans</h1>
            <div className="amen_slider owl-loaded owl-drag" style={{ display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
                <div className="owl-stage-outer" style={{ display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",marginBottom:"40px"}}>
                    <div className="plans">
                        <img src={plan1} className="plan_img" alt="Plan 1" style={{ width: "360px" }} />
                    </div>
                    <div className="plans">
                        <img src={plan2} className="plan_img" alt="Plan 2" style={{ width: "360px" }} />
                    </div>
                    <div className="plans">
                        <img src={plan3} className="plan_img" alt="Plan 3" style={{ width: "360px" }} />
                    </div>
                    <div className="plans">
                        <img src={plan4} className="plan_img" alt="Plan 4" style={{ width: "360px" }} />
                    </div>
                </div>
                <div className="owl-nav" style={{ display:"flex",justifyContent:"center",alignItems:"center",gap:"20px", margin:"40px 20px 20px 20px "}}>
                    <button type="button" role="presentation" className="owl-prev" style={{ backgroundColor:"transparent", border:"none"}} >
                        <img src={prev} className="prevv" alt="no_prev" style={{ width: "35px" }} />
                    </button>
                    <button type="button" role="presentation" className="owl-next" style={{ backgroundColor:"transparent", border:"none"}}>
                        <img src={next} className="nexxt" alt="no_next" style={{ width: "35px" }} />
                    </button>
                </div>
            </div>
        </div>
    );
}

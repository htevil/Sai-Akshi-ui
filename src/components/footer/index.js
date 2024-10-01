import React from 'react';

export default function Footer() {
    return (
        <div className="container-fluid" id="footersection">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 footermain">
                    <span>
                        All rights are reserved | Copyright © 2024 Sai Akshi | 
                        <span 
                            className="reradisclaimerbtn" 
                            data-toggle="modal" 
                            data-target="#rera-modal"
                        >
                            RERA Disclaimer
                        </span> | 
                        <span 
                            className="reradisclaimerbtn" 
                            data-toggle="modal" 
                            data-target="#disc-modal"
                        >
                            Disclaimer
                        </span>
                    </span>
                    {/* <span className="bn_key_span">Powered By <a href="https://www.brandniti.com"><img src="images/bn_key.png" className="bn_key" alt="" /></a></span> */}
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import Navbar from "../Navbar/Navbar";
import './ssl.css';
import Home from "../Home/Home";
import Instagram from '../../utils/images/instagram.png';
import Mail from '../../utils/images/mail.png'

const SSL = () => {
    return (
        <div className="ssl">
            <div className="header">
                <div className="small-contact">
                    <div className="small-contact_row">
                        <img className="icons" src={Instagram} />
                        <a href="https://www.instagram.com/ssl_detailing/?hl=en">@ssl_detailing</a>
                    </div>
                    <div className="small-contact_row">
                        <img className="icons" src={Mail} />
                        <a href="mailto:booking@ssl-detailing.com">booking@ssl-detailing.com</a>
                    </div>
                </div>
                <h2 className={"heading"}>
                    S.S.L. Detailing
                </h2>
            </div>
            <Navbar />
            <Home />
        </div>
    )
}

export default SSL;
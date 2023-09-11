import React from "react";

const Footer = ()=>{
    return(
        <footer className="App-footer">
            <img src={window.location.origin+"/assets/logo.svg"} alt="Logo kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
import React from "react";

const Footer = ()=>{
    return(
        <footer className="App-footer">
            <img src={window.location.origin+"/assets/logo.svg"} alt="Logo kasa"/>
            <div className="text">
                <p>© 2020 Kasa. All</p>
                <p>rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
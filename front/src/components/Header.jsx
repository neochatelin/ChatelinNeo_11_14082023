import React from "react";

const Header = ()=>{
    let tab = window.location.href.split('/');
    
    return(
        <header className="App-header">
            <img src={window.location.origin+"/assets/logo.svg"} alt="Logo kasa"/>
            <div>
                <a href="/" className={tab[tab.length-1] === '' ? "underline" : ""}>Accueil</a>
                <a href="/A-Propos" className={tab[tab.length-1] === "A-Propos" ? "underline" : ""}>A Propos</a>
            </div>
        </header>
    );
};

export default Header;
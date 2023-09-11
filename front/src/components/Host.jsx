import React from "react";

const Host = (props)=>{
    let name = props.name.split(' ');
    return(
        <div className="Host-card">
            <img src={props.picture} alt={props.name}/>
            <div>
                <p>{name[0]}</p>
                <p>{name[1]}</p>
            </div>
        </div>
    );
};

export default Host;
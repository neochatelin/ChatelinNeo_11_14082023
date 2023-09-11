import React from "react";

const Card = (props)=>{
    return(
        <div className="Card" onClick={(e)=>(e.preventDefault() + (window.location = "/fiche-logement/"+props.id))}>
            <img src={props.img} alt={props.title}/>
            <div className="effect"></div>
            <p>{props.title}</p>
        </div>
    )
}

export default Card;
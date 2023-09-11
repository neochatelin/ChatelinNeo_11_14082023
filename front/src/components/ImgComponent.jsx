import React from "react";

const ImgComponent = (props)=>{
    return(
        <div className="ImgComponent">
            <img src={props.img} alt={props.text}/>
            <p>{props.text}</p>
        </div>
    )
}

export default ImgComponent;
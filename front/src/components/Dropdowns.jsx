import React, { useState } from "react";

const Dropdowns = (props)=>{
    const [state, setState] = useState("close");
    return(
        <div className={"Dropdowns "+state} onClick={(e)=>(e.preventDefault() + (state === 'open' ? setState("close") : setState("open")))}>
            <div className="Dropdown-title">
                <p className="title">{props.title}</p>
                <p className="arrow">{'>'}</p>
            </div>
            <div className="Dropdown-content">
                {
                    props.isList ?
                    props.content.map((element, index) => (
                        <li key={index}>{element}</li>
                    )):
                    <p>{props.content}</p>
                }
                
            </div>
        </div>
    )
}

export default Dropdowns;
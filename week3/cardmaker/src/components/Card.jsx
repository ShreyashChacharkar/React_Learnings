import React from "react";

function Card ({title, textBody, userId}) {
    
    return(
    <>
    <div className="card" style={{width: "18rem"}}>
        <img src="src\assets\react.svg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{textBody}</p>
            <span className="text">{userId}</span>
        </div>
    </div>
    </>
    )
}

export default Card;
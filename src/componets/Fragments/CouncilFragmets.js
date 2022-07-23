import React, {useState,useEffect} from "react";
const CouncilFragmets = ({imagen,titulo,textoDesctipcion,chaneLink,twettLink}) =>{
return(
    <>
        <div className="card" style={{width :"18rem"}}>
            <img className="card-img-top" src={imagen} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <h6 className="card-text">{textoDesctipcion}</h6>
                <a href={chaneLink} className="card-link">Youtube</a>
                <a href={twettLink} className="card-link">Twitter</a>
            </div>
        </div>

    </>
)
}
export default CouncilFragmets
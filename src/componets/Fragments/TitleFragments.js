import React,{useState,useEffect} from "react";
const titleStyle={
    fontsize: '',
    textAlign:'center',
    color: "blueviolet"
};
const TitleFragments = ({tit}) =>{
    return(
        <>
            <div style={titleStyle} className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>{tit}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TitleFragments

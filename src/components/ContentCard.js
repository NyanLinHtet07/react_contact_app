import React from "react";

const ContentCart = ( props) => {
    const { id, name, email} = props.contact
    return (
        <div className="item">
            <div className="content">
                <div className="header">
                    {name}
                </div>
                <div> 
                    {email}
                </div>
                <i className="trash alternate outline icon" style={{ color:"red", marginTop: "10px"}}></i>
            </div>
        </div>
    );
}

export default ContentCart; 
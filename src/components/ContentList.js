import React from "react";
import ContentCart from "./ContentCard";


const ContactList = (props) => {
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContentCart contact = {contact} />
        )
    })

    return(
        <div className="ui celled list">
            {renderContactList}
        </div>
    ); 
} 

export default ContactList;
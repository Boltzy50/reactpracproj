import { useState } from "react";
import Contact from "../components/contact"
import { mockResponse } from "../utils/mockResponse";
import ContactForm from "../components/contactForm";

const Main = () => {
    const response = mockResponse();
    const contacts = response.map((contact, index) => {
        return (
            <>
                <Contact contact={contact} key={index} />
            </>

        )
    });
        

    return(
        <>
            <ContactForm />
            <ul>{contacts}</ul>

        </>
        
    )
}

export default Main;
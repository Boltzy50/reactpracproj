import { useState } from "react";
import Contact from "../components/contact"
import { mockResponse } from "../utils/mockResponse";
import MyForm from "../components/form";
import ContactForm from "../components/contactForm";

const Main = () => {
    const response = mockResponse();
    
    const [fields, setFields] = useState();
    
    const handleSubmit = (e, inputs) => {
        e.preventDefault();
        setFields(inputs)
        console.log(inputs)
        
    }

    const contacts = response.map((contact, index) => {
        return (
            <Contact contact={contact} key={index} />
        )
    });
        

    return(
        <>
            
            <MyForm action={handleSubmit} />
            
            <ul>{contacts}</ul>

        </>
        
    )
}

export default Main;
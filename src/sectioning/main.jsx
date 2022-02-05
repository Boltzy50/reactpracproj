import { useState } from "react";
import Contact from "../components/contact"
import { mockResponse } from "../utils/mockResponse";
import Counter from "../components/counter";

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
            <Counter />
            <ul>{contacts}</ul>
        </>
        
    )
}

export default Main;
import { useEffect, useState } from "react";
import Contact from "../components/contact"
import { mockResponse } from "../utils/mockResponse";
import MyForm from "../components/form";
import { Route, Routes } from "react-router-dom";

const Main = () => {
    const response = mockResponse();
    
    const [fields, setFields] = useState([]);

    useEffect(() => {
        setFields(mockResponse());
    }, []);
    
    const handleSubmit = (e, inputs) => {
        e.preventDefault();
        const updatedContacts = [...fields, inputs];
        setFields(updatedContacts);      
    }

    // const newContacts = fields.map((contact, index) =>{
    //     return <Contact contact={contact} key={index} />;
    // });


    const contacts = fields.map((contact, index) => {
        return (
            <Contact contact={contact} key={index} />
        )
    });
        

    return(
        <>
            <Routes>
                <Route path="/" element={<h1>Welcome to the Contact App</h1>} />
                <Route path="add" element={<MyForm action={handleSubmit} />} />
                <Route path="list" element={<ul>{contacts}</ul>} />
                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>

        </>
        
    )
}

export default Main;
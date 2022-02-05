import { useState } from "react";

const ContactForm = () => {

    const [name, setName] = useState('Bob');

    const handleChange = e => {
        const target = e.target.value;
        setName(target);
        console.log(name);
    };

    return (
        <form>
            <label>
                <span>Full Name</span>
                <input onChange={handleChange} value={name}/>
            </label>
        </form>
    );
    
};

export default ContactForm
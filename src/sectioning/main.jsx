import Contact from "../components/contact"
import faker from "@faker-js/faker";



const Main = () => {

    const cheating = [1,1,1,1,1,1,1,1,1,1]

    const names = cheating.map(name => {
        const person = faker.name.findName();
        return <Contact name={person} />   
    });
        

    return(
        <>
            <main>I am the main</main>
            <ul>{names}</ul>>
        </>
        

    )
}

export default Main
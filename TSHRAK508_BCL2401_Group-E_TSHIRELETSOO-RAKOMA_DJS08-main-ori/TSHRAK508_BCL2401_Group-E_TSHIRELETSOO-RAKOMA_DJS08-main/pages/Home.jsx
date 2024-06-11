import React from "react" // Import React library
import { Link } from "react-router-dom" // Import Link component from react-router-dom

// Define and export the Home component
export default function Home() {
    return (
        <div className="home-container"> {/* Wrapper div with class name 'home-container' */}
            <h1>You got the travel plans, we got the travel vans.</h1> {/* Main heading */}
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p> {/* Paragraph describing the purpose */}
            <Link to="vans">Find your van</Link> {/* Link to navigate to the 'vans' route */}
        </div>
    )
};

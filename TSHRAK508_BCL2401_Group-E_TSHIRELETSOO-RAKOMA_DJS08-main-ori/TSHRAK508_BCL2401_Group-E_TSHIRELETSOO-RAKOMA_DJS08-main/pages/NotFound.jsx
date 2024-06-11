import React from "react" // Import React library
import { Link } from "react-router-dom" // Import Link component from react-router-dom

// Define and export the NotFound component
export default function NotFound() {
    return (
        <div className="not-found-container"> {/* Wrapper div with class name 'not-found-container' */}
            <h1>Sorry, the page you were looking for was not found.</h1> {/* Main heading */}
            <Link to="/" className="link-button">Return to Home</Link> {/* Link to navigate to the home page */}
        </div>
    )
}

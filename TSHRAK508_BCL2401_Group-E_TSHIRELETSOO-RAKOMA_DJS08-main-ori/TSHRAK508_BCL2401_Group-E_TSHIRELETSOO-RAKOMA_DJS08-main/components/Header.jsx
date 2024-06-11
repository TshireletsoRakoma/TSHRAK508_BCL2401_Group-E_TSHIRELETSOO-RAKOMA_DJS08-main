import React from "react" // Import React to use JSX and create components
import { Link, NavLink } from "react-router-dom" // Import Link and NavLink for navigation
import imageUrl from "/assets/images/avatar-icon.png" // Import the image for the avatar icon

// Define the Header component
export default function Header() {
    // Define the styles to be applied to the active navigation link
    const activeStyles = {
        fontWeight: "bold", // Make the font bold
        textDecoration: "underline", // Underline the text
        color: "#161616" // Set the text color to a dark shade
    }

    // Function to simulate logging out by removing the 'loggedin' item from localStorage
    function fakeLogOut() {
        localStorage.removeItem("loggedin") // Remove the 'loggedin' item from localStorage
    }

    return (
        // Render the header element
        <header>
            {/* Logo link to the home page */}
            <Link className="site-logo" to="/">#VanLife</Link>
            
            {/* Navigation bar */}
            <nav>
                {/* NavLink to the host page with active styling */}
                <NavLink
                    to="/host" // Set the destination path to '/host'
                    style={({ isActive }) => isActive ? activeStyles : null} // Apply activeStyles if the link is active
                >
                    Host {/* Display the link text */}
                </NavLink>
                
                {/* NavLink to the about page with active styling */}
                <NavLink
                    to="/about" // Set the destination path to '/about'
                    style={({ isActive }) => isActive ? activeStyles : null} // Apply activeStyles if the link is active
                >
                    About {/* Display the link text */}
                </NavLink>
                
                {/* NavLink to the vans page with active styling */}
                <NavLink
                    to="/vans" // Set the destination path to '/vans'
                    style={({ isActive }) => isActive ? activeStyles : null} // Apply activeStyles if the link is active
                >
                    Vans {/* Display the link text */}
                </NavLink>
                
                {/* Link to the login page with an avatar icon */}
                <Link to="login" className="login-link">
                    <img
                        src={imageUrl} // Set the source of the image to the imported URL
                        className="login-icon" // Apply the login-icon class to the image
                    />
                </Link>
                
                {/* Button to simulate logging out */}
                <button onClick={fakeLogOut}>X</button> {/* Call fakeLogOut function on click */}
            </nav>
        </header>
    )
}

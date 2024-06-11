import React from "react" // Import React library
import { NavLink, Outlet } from "react-router-dom" // Import NavLink and Outlet components from react-router-dom

// Define and export the HostLayout component
export default function HostLayout() {
    // Define the styles for the active navigation link
    const activeStyles = {
        fontWeight: "bold", // Bold font weight
        textDecoration: "underline", // Underlined text decoration
        color: "#161616" // Text color
    }

    return (
        <> {/* Fragment to group multiple elements without adding extra nodes to the DOM */}
            <nav className="host-nav"> {/* Navigation container with class name 'host-nav' */}
                <NavLink
                    to="." // Route path for this link (current route)
                    end // Ensure this link is active only when the route exactly matches
                    style={({ isActive }) => isActive ? activeStyles : null} // Apply activeStyles if the link is active, otherwise null
                >
                    Dashboard {/* Link text */}
                </NavLink>

                <NavLink
                    to="income" // Route path for this link (income route)
                    style={({ isActive }) => isActive ? activeStyles : null} // Apply activeStyles if the link is active, otherwise null
                >
                    Income {/* Link text */}
                </NavLink>
                
                <NavLink
                    to="vans" // Route path for this link (vans route)
                    style={({ isActive }) => isActive ? activeStyles : null} // Apply activeStyles if the link is active, otherwise null
                >
                    Vans {/* Link text */}
                </NavLink>

                <NavLink
                    to="reviews" // Route path for this link (reviews route)
                    style={({ isActive }) => isActive ? activeStyles : null} // Apply activeStyles if the link is active, otherwise null
                >
                    Reviews {/* Link text */}
                </NavLink>

            </nav>
            <Outlet /> {/* Render the matched child route component */}
        </>
    )
}

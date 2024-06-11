import React from "react" // Import React library
import { useParams, Link, NavLink, Outlet } from "react-router-dom" // Import necessary components from react-router-dom
import { getHostVans } from "../../api" // Import getHostVans function from the API module

// Define and export the HostVanDetail component
export default function HostVanDetail() {
    const [currentVan, setCurrentVan] = React.useState(null) // State to store the current van details
    const [loading, setLoading] = React.useState(false) // State to manage loading status
    const [error, setError] = React.useState(null) // State to manage error status
    const { id } = useParams() // Extract the 'id' parameter from the route

    // useEffect to fetch data when the component mounts or 'id' changes
    React.useEffect(() => {
        async function loadVans() { // Define an async function to load van data
            setLoading(true) // Set loading state to true
            try {
                const data = await getHostVans(id) // Fetch the van data using the 'id'
                setCurrentVan(data) // Set the current van data
            } catch (err) {
                setError(err) // Set error state if an error occurs
            } finally {
                setLoading(false) // Set loading state to false after data is fetched or an error occurs
            }
        }

        loadVans() // Call the loadVans function
    }, [id]) // Dependency array with 'id' to re-run the effect when 'id' changes

    if (loading) { // If loading is true
        return <h1>Loading...</h1> // Display loading message
    }

    if (error) { // If there is an error
        return <h1>There was an error: {error.message}</h1> // Display error message
    }

    const activeStyles = { // Define styles for active navigation links
        fontWeight: "bold", // Bold font weight
        textDecoration: "underline", // Underlined text decoration
        color: "#161616" // Text color
    }

    return (
        <section> {/* Section for van details */}
            <Link
                to=".." // Link to navigate back to the parent route
                relative="path" // Indicate that the path is relative
                className="back-button" // Class name for the back button
            >&larr; <span>Back to all vans</span></Link> {/* Back button text */}
            {currentVan && // If currentVan is not null
                <div className="host-van-detail-layout-container"> {/* Wrapper div for van detail layout */}
                    <div className="host-van-detail"> {/* Wrapper div for van details */}
                        <img src={currentVan.imageUrl} /> {/* Van image */}
                        <div className="host-van-detail-info-text"> {/* Wrapper div for van info text */}
                            <i
                                className={`van-type van-type-${currentVan.type}`} // Class name for van type
                            >
                                {currentVan.type} {/* Van type */}
                            </i>
                            <h3>{currentVan.name}</h3> {/* Van name */}
                            <h4>${currentVan.price}/day</h4> {/* Van price per day */}
                        </div>
                    </div>

                    <nav className="host-van-detail-nav"> {/* Navigation for van details */}
                        <NavLink
                            to="." // Route path for this link (current route)
                            end // Ensure this link is active only when the route exactly matches
                            style={({ isActive }) => isActive ? activeStyles : null} // Apply activeStyles if the link is active, otherwise null
                        >
                            Details {/* Link text */}
                        </NavLink>
                        <NavLink
                            to="pricing" // Route path for this link (pricing route)
                            style={({ isActive }) => isActive ? activeStyles : null} // Apply activeStyles if the link is active, otherwise null
                        >
                            Pricing {/* Link text */}
                        </NavLink>
                        <NavLink
                            to="photos" // Route path for this link (photos route)
                            style={({ isActive }) => isActive ? activeStyles : null} // Apply activeStyles if the link is active, otherwise null
                        >
                            Photos {/* Link text */}
                        </NavLink>
                    </nav>
                    <Outlet context={{ currentVan }} /> {/* Render the matched child route component, passing currentVan as context */}
                </div>}
        </section>
    )
}

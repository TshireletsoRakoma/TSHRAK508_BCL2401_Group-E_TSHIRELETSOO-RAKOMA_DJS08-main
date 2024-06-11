import React from "react" // Import React library
import { useOutletContext } from "react-router-dom" // Import useOutletContext hook from react-router-dom

// Define and export the HostVanInfo component
export default function HostVanInfo() {
    const { currentVan } = useOutletContext() // Extract currentVan from the context provided by the Outlet

    return (
        <section className="host-van-detail-info"> {/* Section for van detail information */}
            <h4>Name: <span>{currentVan.name}</span></h4> {/* Display van name */}
            <h4>Category: <span>{currentVan.type}</span></h4> {/* Display van type */}
            <h4>Description: <span>{currentVan.description}</span></h4> {/* Display van description */}
            <h4>Visibility: <span>Public</span></h4> {/* Display van visibility status */}
        </section>
    )
}

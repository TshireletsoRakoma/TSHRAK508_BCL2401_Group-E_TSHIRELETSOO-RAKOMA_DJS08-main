import React from "react" // Import React library
import { Outlet } from "react-router-dom" // Import Outlet component from react-router-dom
import Header from "./Header" // Import Header component from Header file
import Footer from "./Footer" // Import Footer component from Footer file

// Define and export the Layout component
export default function Layout() {
    return (
        <div className="site-wrapper"> {/* Wrapper div with class name 'site-wrapper' */}
            <Header /> {/* Render the Header component */}
            <main> {/* Main content container */}
                <Outlet /> {/* Render the matched child route component */}
            </main>
            <Footer /> {/* Render the Footer component */}
        </div>
    )
}

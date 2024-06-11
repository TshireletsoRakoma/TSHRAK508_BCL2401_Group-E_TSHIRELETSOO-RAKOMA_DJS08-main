import React from "react" // Import React to use JSX and create components
import { Outlet, Navigate, useLocation } from "react-router-dom" // Import Outlet for nested routes, Navigate for navigation, and useLocation for getting the current route

// Define the AuthRequired component
export default function AuthRequired() {
    // Retrieve the 'loggedin' item from localStorage to check if the user is logged in
    const isLoggedIn = localStorage.getItem("loggedin")
    // Get the current location object which contains information about the current URL
    const location = useLocation()
    
    // Check if the user is not logged in
    if (!isLoggedIn) {
        // If not logged in, navigate to the login page
        return (
            <Navigate 
                to="/login" // Set the destination path to '/login'
                state={{
                    message: "You must log in first", // Pass a message to the login route
                    from: location.pathname // Pass the current path to the login route for redirecting after login
                }} 
                replace // Replace the current entry in the history stack with the login page
            />
        )
    }

    // If the user is logged in, render the nested routes
    return <Outlet />
}

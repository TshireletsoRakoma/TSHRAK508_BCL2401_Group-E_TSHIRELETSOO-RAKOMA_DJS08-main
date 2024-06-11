import React from "react" // Import React library
import { useLocation, useNavigate } from "react-router-dom" // Import hooks from react-router-dom
import { loginUser } from "../api" // Import loginUser function from the API module

// Define and export the Login component
export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" }) // State for login form data
    const [status, setStatus] = React.useState("idle") // State to manage the status of the login process
    const [error, setError] = React.useState(null) // State to manage errors

    const location = useLocation() // Hook to get the current location
    const navigate = useNavigate() // Hook to navigate programmatically

    const from = location.state?.from || "/host"; // Determine the redirect path after login

    function handleSubmit(e) { // Handle form submission
        e.preventDefault() // Prevent default form submission behavior
        setStatus("submitting") // Set status to submitting
        loginUser(loginFormData) // Call the loginUser function with form data
            .then(data => {
                setError(null) // Clear any previous errors
                localStorage.setItem("loggedin", true) // Set logged-in status in localStorage
                navigate(from, { replace: true }) // Navigate to the desired route
            })
            .catch(err => {
                setError(err) // Set error state if login fails
            })
            .finally(() => {
                setStatus("idle") // Reset status to idle
            })
    }

    function handleChange(e) { // Handle form input changes
        const { name, value } = e.target // Extract name and value from the event target
        setLoginFormData(prev => ({
            ...prev, // Spread the previous state
            [name]: value // Update the specific field with the new value
        }))
    }

    return (
        <div className="login-container"> {/* Wrapper div with class name 'login-container' */}
            {
                location.state?.message && // If there is a message in location state
                    <h3 className="login-error">{location.state.message}</h3> // Display the message as an error
            }
            <h1>Sign in to your account</h1> {/* Main heading */}
            {
                error?.message && // If there is an error message
                    <h3 className="login-error">{error.message}</h3> // Display the error message
            }

            <form onSubmit={handleSubmit} className="login-form"> {/* Form element with onSubmit handler */}
                <input
                    name="email" // Name attribute for the email input
                    onChange={handleChange} // Handle change event
                    type="email" // Input type is email
                    placeholder="Email address" // Placeholder text
                    value={loginFormData.email} // Value from the state
                />
                <input
                    name="password" // Name attribute for the password input
                    onChange={handleChange} // Handle change event
                    type="password" // Input type is password
                    placeholder="Password" // Placeholder text
                    value={loginFormData.password} // Value from the state
                />
                <button
                    disabled={status === "submitting"} // Disable the button if submitting
                >
                    {status === "submitting"
                        ? "Logging in..." // Show logging in text if submitting
                        : "Log in" // Show log in text if not submitting
                    }
                </button>
            </form>
        </div>
    )
}

import React from "react" // Import React library
import bgImg from "../assets/images/about-hero.png" // Import background image
import { Link } from "react-router-dom" // Import Link component from react-router-dom

// Define and export the About component
export default function About() {
    return (
        <div className="about-page-container"> {/* Wrapper div with class name 'about-page-container' */}
            <img src={bgImg} className="about-hero-image" /> {/* Background image with class name 'about-hero-image' */}
            <div className="about-page-content"> {/* Div for the content of the about page */}
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1> {/* Main heading */}
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p> {/* First paragraph */}
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p> {/* Second paragraph */}
            </div>
            <div className="about-page-cta"> {/* Div for the call to action */}
                <h2>Your destination is waiting.<br />Your van is ready.</h2> {/* Call to action heading */}
                <Link className="link-button" to="/vans">Explore our vans</Link> {/* Link button to navigate to the vans page */}
            </div>
        </div>
    );
}

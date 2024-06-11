import React from "react" // Import React library
import { Link } from "react-router-dom" // Import Link component from react-router-dom
import { BsStarFill } from "react-icons/bs" // Import BsStarFill icon from react-icons/bs
import { getHostVans } from "../../api" // Import getHostVans function from the API module

// Define and export the Dashboard component
export default function Dashboard() {
    const [vans, setVans] = React.useState([]) // Declare state variable 'vans' with an empty array as initial value
    const [loading, setLoading] = React.useState(false) // Declare state variable 'loading' to manage loading state
    const [error, setError] = React.useState(null) // Declare state variable 'error' to manage error state

    // useEffect to fetch data when the component mounts
    React.useEffect(() => {
        setLoading(true) // Set loading state to true
        getHostVans()
            .then(data => setVans(data)) // Update 'vans' state with fetched data
            .catch(err => setError(err)) // Set error state if an error occurs
            .finally(() => setLoading(false)) // Set loading state to false after the data is fetched or an error occurs
    }, []) // Empty dependency array to run effect only once when component mounts

    // Function to render van elements
    function renderVanElements(vans) {
        const hostVansEls = vans.map((van) => (
            <div className="host-van-single" key={van.id}> {/* Wrapper div with class name 'host-van-single' */}
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} /> {/* Image of the van */}
                <div className="host-van-info"> {/* Wrapper div for van info */}
                    <h3>{van.name}</h3> {/* Van name */}
                    <p>${van.price}/day</p> {/* Van price per day */}
                </div>
                <Link to={`vans/${van.id}`}>View</Link> {/* Link to van details */}
            </div>
        ))

        return (
            <div className="host-vans-list"> {/* Wrapper div with class name 'host-vans-list' */}
                <section>{hostVansEls}</section> {/* Section containing all van elements */}
            </div>
        )
    }

    // if (loading) {
    //     return <h1>Loading...</h1>
    // }

    if (error) { // If there is an error
        return <h1>Error: {error.message}</h1> // Display error message
    }

    return (
        <>
            <section className="host-dashboard-earnings"> {/* Section for dashboard earnings */}
                <div className="info"> {/* Wrapper div for earnings info */}
                    <h1>Welcome!</h1> {/* Welcome message */}
                    <p>Income last <span>30 days</span></p> {/* Income info */}
                    <h2>$2,260</h2> {/* Income amount */}
                </div>
                <Link to="income">Details</Link> {/* Link to income details */}
            </section>
            <section className="host-dashboard-reviews"> {/* Section for dashboard reviews */}
                <h2>Review score</h2> {/* Review score header */}
                <BsStarFill className="star" /> {/* Star icon */}
                <p>
                    <span>5.0</span>/5 {/* Review score */}
                </p>
                <Link to="reviews">Details</Link> {/* Link to review details */}
            </section>
            <section className="host-dashboard-vans"> {/* Section for dashboard vans */}
                <div className="top"> {/* Wrapper div for top section of vans */}
                    <h2>Your listed vans</h2> {/* Header for listed vans */}
                    <Link to="vans">View all</Link> {/* Link to view all vans */}
                </div>
                {
                    loading && !vans // If loading is true and no vans are loaded
                    ? <h1>Loading...</h1> // Display loading message
                    : (
                        <>
                            {renderVanElements(vans)} {/* Render van elements */}
                        </>
                    )
                }
                {/* Suspense and Await commented out */}
                {/*<React.Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={loaderData.vans}>{renderVanElements}</Await>
                </React.Suspense>*/}
            </section>
        </>
    )
}

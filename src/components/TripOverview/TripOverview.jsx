const TripOverview = () => {
    // Create some dummy data
    const trips = [
        {
            title: "Beijing",
            description: "Past and future",
            destination: "Beijing",
            country: "China",
            startDate: "2026-05-12",
            endDate: "2026-06-25",
            activities: [
                {
                    title: "Meet the emperor",
                    description: "Visit the remnants of the old palace",
                    date: "2026-06-02",
                }
            ]
        }, {
            title: "Big Apple",
            description: "Explore the known and unknown treasures",
            destination: "New York",
            country: "USA",
            startDate: "2026-09-03",
            endDate: "2026-09-10",
            activities: [
                {
                    title: "King Kong",
                    description: "Climb the Empire State Building",
                    date: "2026-06-02",
                }
            ]
        }
    ]

    // Display the component
    return (
        <>
        <h2 className='subheader'>Trips</h2>
        <div className='information'>
            <ul>
                {trips.map(trip => {
                    return <li>
                        <h3>{trip.title}</h3>
                        <p>{trip.description}</p>
                        <p>{trip.destination}, {trip.country}</p>
                        <p>{trip.startDate}-{trip.endDate}</p>
                    </li>

                })}
            </ul>
        </div>
        <div className='actions'>
            <button className='primary'>Create new trip</button>
            <button className='secondary' disabled>Review past trip</button>
        </div>
        </>
    )
}

export default TripOverview
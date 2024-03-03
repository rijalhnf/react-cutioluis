function Weather() {
    return (
        <div>
            <h1 className="header-title" style={{ textAlign: "center", marginBottom: "10px" }}> Cuaca Harian.</h1>
            <div style={{ textAlign: "center", display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "10px" }}>
                <div className="project-box">
                    <span className="white-text center-text">⛈️  How's the weather?</span>
                    <p className="gray-text text-box">
                        The weather forecast predicts sunny skies and mild temperatures for the upcoming day.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Weather

function Kotak({ judul, isi, children }) {
    return (
        <div style={{ textAlign: "center", display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "10px" }}>
            <div className="project-box">
                <span className="white-text center-text">{judul}</span>
                <p className="gray-text text-box">

                    {isi}
                </p>
                {children}
            </div >
        </div >
    )
}

function Developer() {
    return (
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
            <h1 className="header-title" style={{ textAlign: "center", marginBottom: "10px" }}> Portfolio Programming.</h1>
            <div style={{ textAlign: "center", display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "10px" }}>
                <div className="project-box">
                    <span className="white-text center-text">🧑🏻‍💻 Scripting</span>
                    <p className="gray-text text-box">
                        A developer is a skilled professional who designs, builds, and maintains software applications, websites, and digital solutions, leveraging coding languages and technologies to bring innovative ideas to life in the digital realm.
                    </p>
                </div>
            </div>

            <Kotak judul="in Development...">
            </Kotak>

            <div className='footer' style={{ height: "20px" }}></div>
        </div>
    )
}

export default Developer

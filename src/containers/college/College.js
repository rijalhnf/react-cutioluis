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

function College() {
    return (
        <div style={{ marginLeft: "20px", marginRight: "20px", justifyContent: "center" }}>
            <h1 className="header-title" style={{ textAlign: "center", marginBottom: "10px" }}> Serba-Serbi Kuliah.</h1>

            <div style={{ textAlign: "center", display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "10px" }}>
                <div className="project-box">
                    <span className="white-text center-text">📝 Path to the knowledge</span>
                    <p className="gray-text text-box">
                        Knowledge is the cornerstone of human understanding, empowering individuals with insights, wisdom, and the capacity to navigate the complexities of the world around them.
                    </p>
                </div>
            </div>


            <Kotak judul="Jurnal Fraud Early Warning System : Identifikasi Potensi Fraud dalam Pelaporan Harta Kekayaan Penyelenggara Negara Berbasis Big Data">
                <a href="https://j-innovative.org/index.php/Innovative/article/view/3779" target="_blank" rel="noreferrer">🔗 Link Jurnal</a>
            </Kotak>

            <Kotak judul="Karya Tulis Tugas Akhir (KTTA): Tinjauan Alokasi Transfer Ke Daerah Otonom Baru Papua Selatan, Papua Tengah, dan Papua Pegunungan Tahun 2023">
                <a href="https://drive.google.com/file/d/1D0lnIe0xsBOnhgjgU11sAqkyXxgwONDX/view?usp=sharing" target="_blank" rel="noreferrer">🔗 Link KTTA</a>
            </Kotak>

            <Kotak judul="Kelompok Kerja Masyarakat: Buku Saku UMKM Designed + Pencatatan Akuntansi Sederhana">
                <a href="https://drive.google.com/file/d/1eOkNzc9ajo208CzC4ewbqI1rM2vueC1h/view?usp=sharing" target="_blank" rel="noreferrer">🔗 Link Buku Saku UMKM</a>
            </Kotak>

            <div className='footer' style={{ height: "20px" }}></div>
        </div>
    )
}

export default College

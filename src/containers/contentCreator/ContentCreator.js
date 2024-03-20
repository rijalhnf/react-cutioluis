import { Flex } from 'antd';
import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

function Kotak({ judul, isi, children }) {
    return (
        <div style={{ textAlign: "center", marginTop: "10px" }}>
            <div className="youtube-box">
                {children}
                <div style={{ padding: "10px" }}>
                    <span className="white-text center-text">{judul}</span>
                    <p className="gray-text text-box">
                        {isi}
                    </p>
                </div>
            </div>
        </div>
    )
}



function Frame({ src }) {
    const { width } = useWindowDimensions();
    const [widthAdapt, setWidthAdapt] = useState("");
    const [heightAdapt, setHeightAdapt] = useState("");

    // if (width < 453) setWidthAdapt("360")

    useEffect(() => {
        if (width > 453) {
            setWidthAdapt("448");
            setHeightAdapt("252");
        } else {
            setWidthAdapt("360");
            setHeightAdapt("202");
        }
    }, [width]);

    return (
        <>
            <iframe width={widthAdapt} height={heightAdapt} src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{ borderRadius: "10px 10px 0px 0px" }}></iframe>
            <br />
            {/* <div>
                width: {width} ~ height: {height}
            </div> */}
        </>
    )
}

function ContentCreator() {
    return (
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
            <h1 className="header-title" style={{ textAlign: "center", marginBottom: "10px" }}> Portfolio Desain & Video.</h1>

            <div style={{ textAlign: "center", display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                <div className="project-box">
                    <span className="white-text center-text">🎨 Create something out of anything</span>
                    <p className="gray-text text-box">
                        A content creator crafts engaging and informative material across various mediums, fostering connections, sparking conversations, and inspiring audiences with their creativity and insights.
                    </p>
                </div>
            </div>

            <Flex wrap="wrap" gap="middle" justify='center' style={{ paddingBottom: "20px" }}>

                <Kotak judul="Apa itu Just-In-Time?" isi="------">
                    <Frame src="https://www.youtube.com/embed/pBKCxhT3PUE?si=C660E1gK-q0tS86K" />
                </Kotak>

                <Kotak judul="Capacity Building BKLI 2019" isi="------">
                    <Frame src="https://www.youtube.com/embed/S8WCSoU5eEs?si=6vV3ptJ7IgiXMh1E" />
                </Kotak>

                <Kotak judul="Cebics Camp 2019" isi="------">
                    <Frame src="https://www.youtube.com/embed/nb12kq0Qbck?si=IFlAIu-3-u2_90oj" />
                </Kotak>

                <Kotak judul="Motion Graphics: Introducing seaport" isi="------">
                    <Frame src="https://www.youtube.com/embed/ZxjGDQNHDqY?si=Sde5j7-oZtQBroTg" />
                </Kotak>

                <Kotak judul="Membaca 70 buku dalam satu tahun" isi="------">
                    <Frame src="https://www.youtube.com/embed/H6K9-yILox8?si=fhsERaZb28lFfb3R" />
                </Kotak>

                <Kotak judul="Kaleidoskop 2020" isi="------">
                    <Frame src="https://www.youtube.com/embed/N_xwUTPP-Ew?si=5wTFjw41ANc0S1cV" />
                </Kotak>
                <Kotak judul="Animation Movie: EARLY" isi="------">
                    <Frame src="https://www.youtube.com/embed/thwvVe6ZYk8?si=vPOyVPmrUG9i7jgR" />
                </Kotak>

                <Kotak judul="Kaleidoskop Ramadan 1442 H" isi="------">
                    <Frame src="https://www.youtube.com/embed/NsrDxKE1WQg?si=gCluN-9wnCRxw5Oo" />
                </Kotak>



                <Kotak judul="Kemenkeu Mengajar 3 | 2018" isi="------">
                    <Frame src="https://www.youtube.com/embed/gnKAY9Hv7R0?si=Ji8mSLw121xzBFYi" />
                </Kotak>







            </Flex>
            {/* <div className='footer' style={{ height: "20px" }}></div> */}
        </div>

    )
}

export default ContentCreator

import { Card, Flex, Image } from 'antd';
import "./Calendar.css"
import lamaran from '../../images/calendar/lamaran.jpg'
import ultah from '../../images/calendar/ultah.jpg'
import akad from '../../images/calendar/akad.jpg'
import resepsi from '../../images/calendar/resepsi.jpg'
import imageloading from '../../images/imageloading.png'

const data = {
    "events": [
        {
            "name": "Lamaran",
            "date": "12 Maret 2023",
            "keterangan": "The day I proposed, I was a nervous wreck! Your 'Yes' made my heart dance.",
            "image": lamaran,
        },
        {
            "name": "Ulang Tahun Dila",
            "date": "26 Mei 1999",
            "keterangan": "Your birthday is my favorite holiday. Let's dance under the stars!",
            "image": ultah,
        },
        {
            "name": "Akad Nikah",
            "date": "28 Mei 2023",
            "keterangan": "Promised to be ur partner in crime, your shoulder to lean on, and your personal comedian.",
            "image": akad,
        },
        {
            "name": "Resepsi Nikah",
            "date": "14 Oktober 2023",
            "keterangan": "Laughter, love, and a few embarrassing dance moves!",
            "image": resepsi,
        },
    ]
}

function Calendar() {
    return (
        <div style={{ marginTop: "0px", paddingBottom: "40px", marginLeft: "20px", marginRight: "20px", justifyContent: "center" }}>
            <h1 className="header-title" style={{ textAlign: "center" }}> Dila & Hanif calendar.</h1>

            <div style={{ textAlign: "center", display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "10px" }}>
                <div className="project-box">
                    <span className="white-text center-text">🗓️  To remember our biggest moment!</span>
                    <p className="gray-text text-box">
                        A moment is the fleeting essence of experience, blending past, present, and future, weaving memories and emotions into the fabric of existence, inviting reflection and transformation.
                    </p>
                </div>
            </div>


            {data.events.map((event) =>
                <Card
                    className='custom-box'
                    styles={{ body: { padding: 0, overflow: 'hidden' } }}
                    key={event.name}>
                    <Flex>
                        <Image
                            alt="gambar"
                            src={event.image}
                            preview={imageloading}
                            style={{ display: 'block', width: "200px", height: "270px", borderRadius: "10px 0px 0px" }} />
                        <Flex
                            align="center"
                            justify='flex-start'
                            style={{ padding: 25 }}>

                            <p>
                                <span style={{ fontSize: "22px", fontWeight: "bold" }}>{event.name}</span>
                                <br />
                                {event.date}
                                <br />
                                {event.keterangan}
                            </p>

                        </Flex>
                    </Flex>
                </Card>)
            }
        </div >
    )
}

export default Calendar

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
            "keterangan": "Remember the day I proposed to you? I was more nervous than a cat in a room full of rocking chairs! But seeing your smile as you said 'Yes' made my heart dance like a cat on a hot tin roof.",
            "image": lamaran,
        },
        {
            "name": "Ulang Tahun Dila",
            "date": "26 Mei 1999",
            "keterangan": "Your birthday is like a national holiday in my heart. I might not be able to gift you the moon, but I promise to dance with you under the stars like two clumsy fireflies in love.",
            "image": ultah,
        },
        {
            "name": "Akad Nikah",
            "date": "28 Mei 2023",
            "keterangan": "On our wedding day, when I said 'I do,' I wasn't just promising to share my life with you. I was promising to be your partner in crime, your shoulder to lean on, and your personal comedian, making you laugh even when you don't feel like it.",
            "image": akad,
        },
        {
            "name": "Resepsi Nikah",
            "date": "14 Oktober 2023",
            "keterangan": "Our wedding reception was like a scene from a rom-com movie, with you as the leading lady and me as the bumbling yet lovable sidekick. Every moment was filled with laughter, love, and a few embarrassing dance moves that we'll cherish forever.",
            "image": resepsi,
        },
    ]
}



function Calendar() {
    return (
        <div style={{ marginTop: "0px", paddingBottom: "10px", marginLeft: "30px", marginRight: "30px", justifyContent: "center" }}>
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

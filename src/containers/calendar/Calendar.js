import { Card, Flex } from 'antd';
import "./Calendar.css"
import lamaran from '../../images/calendar/lamaran.jpg'
import ultah from '../../images/calendar/ultah.jpg'
import akad from '../../images/calendar/akad.jpg'
import resepsi from '../../images/calendar/resepsi.jpg'

const data = {
    "events": [
        // {
        //     "name": "Pertemuan Pertama",
        //     "date": "20 Januari 2023",
        // },
        // {
        //     "name": "Pertemuan Keluarga",
        //     "date": "1 Februari 2023",
        // },
        {
            "name": "Lamaran",
            "date": "12 Maret 2023",
            "image": lamaran,
        },
        {
            "name": "Ulang Tahun Dila",
            "date": "26 Mei 1999",
            "image": ultah,
        },
        {
            "name": "Akad Nikah",
            "date": "28 Mei 2023",
            "image": akad,
        },
        {
            "name": "Resepsi Nikah",
            "date": "14 Oktober 2023",
            "image": resepsi,
        },
    ]
}



function Calendar() {
    return (
        <div style={{ marginTop: "0px", paddingBottom: "10px", marginLeft: "40px", marginRight: "40px", justifyContent: "center" }}>
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
                    hoverable
                    className='custom-box'
                    styles={{ body: { padding: 0, overflow: 'hidden' } }}
                    key={event.name}>
                    <Flex>
                        <img
                            alt="gambar"
                            src={event.image}
                            style={{ display: 'block', width: 200 }} />
                        <Flex
                            align="center"
                            justify='flex-start'
                            style={{ padding: 32 }}>

                            <p>
                                <span style={{ fontSize: "22px", fontWeight: "bold" }}>{event.name}</span>
                                <br />
                                {event.date}
                            </p>

                        </Flex>
                    </Flex>
                </Card>)
            }
        </div >
    )
}

export default Calendar

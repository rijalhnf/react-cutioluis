import React, { useState, useEffect } from 'react';
import { Table, Tag, Radio, Flex } from 'antd';

function Weather() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hari, setHari] = useState("0");
    const numHari = (hari === 0) ? Number(hari) : Number(hari) * 24;
    console.log("numHari sejumlah:")
    console.log(numHari)

    const API_URL = 'https://api.open-meteo.com/v1/forecast?';
    const params = {
        latitude: '-6.351,-6.35798,-6.251,-6.1136',
        longitude: '106.8765,106.9212,106.8665,106.8908',
        current: 'temperature_2m,precipitation',
        hourly: 'precipitation_probability',
        timezone: 'Asia/Bangkok',
        forecast_days: 3,
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(API_URL + new URLSearchParams(params));
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                const data = await response.json();
                setData(data);
                console.log(data)
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        console.log("Loading...")
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!data) {
        return <p>No data available.</p>;
    }

    const columns = [
        {
            title: 'Lokasi',
            dataIndex: 'lokasi',
            key: 'lokasi',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Cuaca Pagi (6-7-8 AM)',
            key: 'pagi',
            dataIndex: 'pagi',
            render: (_, { pagi }) => (
                <>
                    {pagi.map((tag) => {
                        let color = tag > 40 ? 'yellow' : 'green';
                        if (tag > 65) {
                            color = 'volcano';
                        }
                        return (
                            <>
                                <Tag color={color} key={tag}>
                                    {tag}%
                                </Tag>
                                <span>     </span>
                            </>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Cuaca Sore (4-5-6 PM)',
            key: 'sore',
            dataIndex: 'sore',
            render: (_, { sore }) => (
                <>
                    {sore.map((tag) => {
                        let color = tag > 40 ? 'yellow' : 'green';
                        if (tag > 65) {
                            color = 'volcano';
                        }
                        return (
                            <>
                                <Tag color={color} key={tag}>
                                    {tag}%
                                </Tag>
                                <span>     </span>
                            </>
                        );
                    })}
                </>
            ),
        },
    ];

    // pagi lokasi 1, sore lokasi 1, pagi lokasi 2, sore lokasi 2 dst.
    // jam 5, jam 6, jam 7, jam 16, jam 17, jam 18
    const pagi16 = data[0].hourly.precipitation_probability[6 + numHari];
    const pagi17 = data[0].hourly.precipitation_probability[7 + numHari];
    const pagi18 = data[0].hourly.precipitation_probability[8 + numHari];
    const sore116 = data[0].hourly.precipitation_probability[16 + numHari];
    const sore117 = data[0].hourly.precipitation_probability[17 + numHari];
    const sore118 = data[0].hourly.precipitation_probability[18 + numHari];
    const pagi26 = data[1].hourly.precipitation_probability[6 + numHari];
    const pagi27 = data[1].hourly.precipitation_probability[7 + numHari];
    const pagi28 = data[1].hourly.precipitation_probability[8 + numHari];
    const sore216 = data[1].hourly.precipitation_probability[16 + numHari];
    const sore217 = data[1].hourly.precipitation_probability[17 + numHari];
    const sore218 = data[1].hourly.precipitation_probability[18 + numHari];
    const pagi36 = data[2].hourly.precipitation_probability[6 + numHari];
    const pagi37 = data[2].hourly.precipitation_probability[7 + numHari];
    const pagi38 = data[2].hourly.precipitation_probability[8 + numHari];
    const sore316 = data[2].hourly.precipitation_probability[16 + numHari];
    const sore317 = data[2].hourly.precipitation_probability[17 + numHari];
    const sore318 = data[2].hourly.precipitation_probability[18 + numHari];
    const pagi46 = data[3].hourly.precipitation_probability[6 + numHari];
    const pagi47 = data[3].hourly.precipitation_probability[7 + numHari];
    const pagi48 = data[3].hourly.precipitation_probability[8 + numHari];
    const sore416 = data[3].hourly.precipitation_probability[16 + numHari];
    const sore417 = data[3].hourly.precipitation_probability[17 + numHari];
    const sore418 = data[3].hourly.precipitation_probability[18 + numHari];

    const dataTable = [
        {
            key: '1',
            lokasi: 'Elang Raya',
            pagi: [pagi16, pagi17, pagi18],
            sore: [sore116, sore117, sore118],
        },
        {
            key: '2',
            lokasi: 'Cibubur Junction',
            pagi: [pagi26, pagi27, pagi28],
            sore: [sore216, sore217, sore218],
        },
        {
            key: '3',
            lokasi: 'Cawang',
            pagi: [pagi36, pagi37, pagi38],
            sore: [sore316, sore317, sore318],
        },
        {
            key: '4',
            lokasi: 'Tanjung Priok',
            pagi: [pagi46, pagi47, pagi48],
            sore: [sore416, sore417, sore418],
        },
    ];


    return (
        <div style={{ height: "100vh" }}>
            <h1 className="header-title" style={{ textAlign: "center", marginBottom: "10px" }}> Cuaca Harian.</h1>

            <div style={{ textAlign: "center", display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>

                <div className="project-box">
                    <span className="white-text center-text">⛈️  How's the rain possibility?</span>
                    <p className="gray-text text-box">
                        The weather forecast predicts sunny skies and mild temperatures for the upcoming day.
                    </p>
                </div>

            </div>
            <Flex justify='center'>
                <Radio.Group value={hari} onChange={(e) => setHari(e.target.value)}>
                    <Radio.Button value="0">Hari ini</Radio.Button>
                    <Radio.Button value="1">Besok</Radio.Button>
                    <Radio.Button value="2">Besok lusa</Radio.Button>
                </Radio.Group>
            </Flex>

            <Table className="custom-box" style={{ marginTop: "10px", marginBottom: "10px" }} columns={columns} dataSource={dataTable} pagination={false} />
            <div className='custom-box' style={{ width: 270, borderRadius: "10px", marginTop: "10px", marginBottom: "10px", padding: "10px" }}>API fetched in: {data[0].current.time}</div>


            {/* <div style={{ marginTop: "30px", marginBottom: "50px", paddingBottom: "100px", marginLeft: "30px", marginRight: "30px", justifyContent: "center" }}> */}
            {/* </div> */}
        </div >
    )
}

export default Weather

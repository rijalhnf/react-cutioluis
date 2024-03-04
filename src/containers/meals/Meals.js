import { Card, Flex, Image } from 'antd';

import ayamgoreng from '../../images/meals/ayamgoreng.jpg'
import ayamkemangi from '../../images/meals/ayamkemangi.jpg'
import ayampanggang from '../../images/meals/ayampanggang.jpg'
import ayampotongspicy from '../../images/meals/ayampotongspicy.jpg'
import bandengpresto from '../../images/meals/bandengpresto.jpg'
import beeflasagna from '../../images/meals/beeflasagna.jpg'
import kebabdimsum from '../../images/meals/kebabdimsum.jpg'
import nasigoreng from '../../images/meals/nasigoreng.jpg'
import veganmeal from '../../images/meals/veganmeal.jpg'
import spicyyakiniku from '../../images/meals/spicyyakiniku.jpg'
import imageloading from '../../images/imageloading.png'

const data = {
    "meals": [
        {
            "name": "Ayam Goreng",
            "keterangan": "Ah, Ayam Goreng ala istriku! Membayangkan aroma pedasnya, seperti ciuman paginya yang membangunkan hatiku dari tidur. Tiap suapannya memberikan kehangatan yang sama seperti senyumannya yang menyinari hari-hariku.",
            "image": ayamgoreng,
        },
        {
            "name": "Ayam Kemangi",
            "keterangan": "Ayam Kemangi yang istriku buatkan sungguh istimewa. Aroma harum daun kemanginya mengingatkan akan senyumnya yang segar setiap pagi. Rasanya, seperti pelukan hangat yang menenangkan jiwa.",
            "image": ayamkemangi,
        },
        {
            "name": "Ayam Panggang",
            "keterangan": "Ayam Panggang ala istriku, manisnya seperti candaannya yang menghangatkan hati. Setiap gigitan menghadirkan kenangan manis dari perjalanan cinta kami. Ia membuatku jatuh cinta lagi dan lagi.",
            "image": ayampanggang,
        },
        {
            "name": "Ayam Potong Spicy",
            "keterangan": "Ayam Potong Spicy yang dibuat istriku membara seperti api cinta di dalam hatiku. Rasanya yang pedas dan menggigit mencerminkan semangat hidupnya yang menyala-nyala. Setiap suapannya memberi kebahagiaan yang tak tergantikan.",
            "image": ayampotongspicy,
        },
        {
            "name": "Bandeng Presto",
            "keterangan": "Bandeng Presto ala istriku, empuknya seperti pelukannya yang hangat. Ia adalah tempatku pulang, tempatku bercerita, dan tempatku merasa benar-benar di rumah. Setiap hidangan yang ia buat adalah sebuah kisah cinta yang tiada tara.",
            "image": bandengpresto,
        },
        {
            "name": "Beef Lasagna",
            "keterangan": "Lasagna daging sapi yang istriku buatkan, menyiratkan rasa kasih dan perhatiannya yang mendalam. Setiap lapisan lasagna menggambarkan perjalanan cinta kami yang penuh warna. Ia adalah pancaran cahaya di tengah kegelapan.",
            "image": beeflasagna,
        },
        {
            "name": "Kebab Dimsum",
            "keterangan": "Kebab dengan dimsum lembut yang istriku buatkan, memberikan kebahagiaan yang tak terhingga. Ia memahami rahasia hatiku, dan menyuguhkan hidangan yang meluluhkan hati. Setiap suapannya, membawa kenangan manis dari masa lalu dan harapan akan masa depan yang cerah bersamanya.",
            "image": kebabdimsum,
        },
        {
            "name": "Nasi Goreng",
            "keterangan": "Nasi Goreng spesial ala istriku, seperti kisah cinta yang selalu baru. Rasanya, seperti kehangatan pelukannya di malam hari yang dingin. Setiap biji nasi membawa pesan kasih, dan setiap suapannya memberi kekuatan baru untuk menjalani hari.",
            "image": nasigoreng,
        },
        {
            "name": "Vegan Meal",
            "keterangan": "Menu Vegan ala istriku adalah puncak kreativitas dan kebaikannya. Ia selalu memikirkan kesehatan dan kebahagiaanku, tak pernah lelah mencari resep baru yang sehat dan lezat. Setiap suapannya adalah ungkapan cinta yang tidak terucapkan.",
            "image": veganmeal,
        },
        {
            "name": "Spicy Yakiniku",
            "keterangan": "Spicy Yakiniku ala istriku, menghadirkan kenangan manis di setiap langkah kami bersama. Rasa pedas dan gurihnya menggambarkan kekuatan dan kehangatan cinta yang tak pernah pudar. Setiap hidangan yang ia buat adalah bukti cinta sejati yang kami bagi.",
            "image": spicyyakiniku,
        }
    ]
}



function Meals() {
    return (
        <div style={{ paddingBottom: "40px" }}>
            <h1 className="header-title" style={{ textAlign: "center", marginBottom: "10px" }}> Bekalnya Dila & Hanif.</h1>
            <div style={{ textAlign: "center", display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "10px" }}>
                <div className="project-box">
                    <span className="white-text center-text">🍱 Bring your meals?</span>
                    <p className="gray-text text-box">
                        My wife prepares delicious and wholesome meals that never fail to delight our taste buds.
                    </p>
                </div>
            </div>

            {data.meals.map((meal) =>
                <Card
                    className='custom-box'
                    styles={{ body: { padding: 0, overflow: 'hidden' } }}
                    key={meal.name}>
                    <Flex>
                        <Image
                            src={meal.image}
                            preview={imageloading}
                            style={{ display: 'block', width: "200px", height: "270px", borderRadius: "10px 0px 0px" }}
                        />
                        <Flex
                            align="center"
                            justify='flex-start'
                            style={{ padding: 25 }}>

                            <p>
                                <span style={{ fontSize: "22px", fontWeight: "bold" }}>{meal.name}</span>
                                <br />
                                {meal.keterangan}
                            </p>

                        </Flex>
                    </Flex>
                </Card>)
            }

        </div>
    )
}

export default Meals

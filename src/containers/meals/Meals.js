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
            "keterangan": "Ayam goreng ala istriku, pedasnya seperti ciuman paginya.",
            "image": ayamgoreng,
        },
        {
            "name": "Ayam Kemangi",
            "keterangan": "Ayam potongan dengan aroma daun kemangi, seperti senyumnya yang segar setiap pagi.",
            "image": ayamkemangi,
        },
        {
            "name": "Ayam Panggang",
            "keterangan": "Ayam panggang ala istriku, manisnya seperti candaannya yang menghangatkan hatiku.",
            "image": ayampanggang,
        },
        {
            "name": "Ayam Potong Spicy",
            "keterangan": "Ayam potong dengan saus pedas, seperti cinta kami yang membara.",
            "image": ayampotongspicy,
        },
        {
            "name": "Bandeng Presto",
            "keterangan": "Bandeng presto ala istriku, empuknya seperti pelukannya yang menenangkan.",
            "image": bandengpresto,
        },
        {
            "name": "Beef Lasagna",
            "keterangan": "Lasagna daging sapi, seperti cinta kami yang tak pernah pudar.",
            "image": beeflasagna,
        },
        {
            "name": "Kebab Dimsum",
            "keterangan": "Kebab dengan dimsum lembut, seperti cerita cinta kami yang penuh kelembutan.",
            "image": kebabdimsum,
        },
        {
            "name": "Nasi Goreng",
            "keterangan": "Nasi goreng spesial ala istriku, seperti kehangatan pelukannya di malam hari.",
            "image": nasigoreng,
        },
        {
            "name": "Vegan Meal",
            "keterangan": "Menu vegan ala istriku, sehat dan lezat seperti cintanya padaku.",
            "image": veganmeal,
        },
        {
            "name": "Spicy Yakiniku",
            "keterangan": "Daging yakiniku dengan saus pedas, seperti kenangan manis di setiap langkah kami bersama.",
            "image": spicyyakiniku,
        }
    ]
}




function Meals() {
    return (
        <div style={{ paddingBottom: "40px", marginLeft: "20px", marginRight: "20px" }}>

            <h1 className="header-title" style={{ textAlign: "center", marginBottom: "10px" }}> Bekalnya Dila & Hanif.</h1>

            <div style={{ textAlign: "center", display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                <div className="project-box">
                    <span className="white-text center-text">🍱 Bring your meals?</span>
                    <p className="gray-text text-box">
                        My wife prepares delicious and wholesome meals that never fail to delight our taste buds.
                    </p>
                </div>
            </div>

            <Flex wrap="wrap" gap="small" justify='center'>

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

            </Flex>

        </div>
    )
}

export default Meals

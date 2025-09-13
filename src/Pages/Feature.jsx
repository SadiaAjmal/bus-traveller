import React from 'react'
import { FaMountainSun } from "react-icons/fa6";

const Feature = () => {
    const featureData = [
        {
            id: 1,
            icon: FaMountainSun,
            title: "Your Road, Your Story",
            desc: "Experience the freedom of travel with our comfortable and reliable bus trips. Enjoy stunning views along the way while relaxing in spacious seats. Whether it's a short trip or a long journey, our buses ensure a smooth and enjoyable ride.",
        },
        {
            id: 2,
            icon: FaMountainSun,
            title: "Coastal Wonders",
            desc: "Embark on a journey through the mesmerizing coastal wonders. Enjoy the serene beauty of pristine beaches, stunning cliffs, and breathtaking ocean views, all from the comfort of our bus. Let the coastal breeze guide you to unforgettable destinations.",
        },
        {
            id: 3,
            icon: FaMountainSun,
            title: "Historic Landmarks",
            desc: "Explore the charm of historic landmarks on our specially curated bus tours. Our comfortable buses will take you through iconic sites, offering insights into their fascinating stories. Sit back, relax, and immerse yourself in the rich history that each destination holds.",
        },
    ]

    return (
        <section className=' md:px-20 px-3 text-center space-y-5 my-5'>
            <header>
                <h2 className=' text-black font-bold md:text-4xl text-2xl pb-5'>
                    Discover Peace, Culture, and Devotion with Our Temple Bus Travels
                </h2>
                <p>Witness Stunning Landscapes from the Comfort of Your Bus Seat</p>
            </header>

            <div data-aos="fade-up" className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {featureData.map((data) => (
                    <article
                        key={data.id}
                        className=' bg-white rounded-4xl hover:shadow-xl px-5 py-10 space-y-5 flex flex-col items-center'
                    >
                        <div className=' flex items-center justify-center'>
                            <data.icon className=" bg-secondary/50 text-white p-5 rounded-full h-16 w-16" />
                        </div>

                        <h3 className=' text-black font-semibold text-xl md:text-2xl w-2/3'>{data.title}</h3>
                        <p className=' text-black'>{data.desc}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Feature

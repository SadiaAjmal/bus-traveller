import React from 'react'
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.webp";
import { FaStar } from "react-icons/fa6";

const About = () => {

  const destinationInfo = [
    {
      id: 1,
      image: card1,
      name: "Sacred Calm at Badrinath Temple.",
      address: "Badrinath, Uttarakhand, India",
      ratings: "4.7",
    },
    {
      id: 2,
      image: card2,
      name: "Divine Majesty at Jagannath Temple.",
      address: "Puri, Odisha, India",
      ratings: "4.8",
    },
    {
      id: 3,
      image: card3,
      name: "Spiritual Serenity at Neem Karoli Temple.",
      address: "Dehradun, India",
      ratings: "4.5",
    },
  ]

  return (
    <section className='about px-3 md:px-20 my-10 py-10 space-y-5'>
      <header>
        <h2 className=' text-black md:text-4xl text-2xl font-bold'>Popular Destination</h2>
        <p>Discover the Most Loved Destination Around the Globe</p>
      </header>

      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16'>
        {destinationInfo.map((info) => (
          <article data-aos="fade-up" key={info.id} className=' space-y-6'>
            <figure>
              <img
                src={info.image}
                alt={info.name}
                className=' w-full h-[40vh] rounded-4xl shadow-secondary/10 shadow-xl'
              />
              <figcaption className=' flex items-center justify-between mt-3'>
                <div>
                  <h3 className=' font-semibold text-xl text-black'>{info.name}</h3>
                  <address className="not-italic">{info.address}</address>
                </div>
                <p className=' flex items-center gap-2 text-white bg-secondary/80 rounded-full px-3 py-1'>
                  <FaStar /> {info.ratings}
                </p>
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About

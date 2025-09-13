import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import packgShowcase from "../assets/packg.webp";
import Showcase2 from "../assets/showcase2.jpeg"

const Packages = () => {
  return (
    <section className='packages md:h-screen w-full md:px-20 px-3 my-20 flex md:flex-row flex-col items-center justify-between gap-10'>

      {/* Left Image Showcase */}
      <figure data-aos="fade-right" className=' md:w-1/3 w-full flex justify-center'>
        <img
          src={packgShowcase}
          alt="Comfortable travel bus showcase"
          className=' md:h-full h-[70vh] shadow-2xl'
        />
      </figure>

      {/* Right Content Section */}
      <article data-aos="fade-left" className=' md:w-2/3 w-full md:space-y-10 space-y-3'>
        <header>
          <h2 className=' text-black font-bold leading-[1.5] text-2xl md:text-4xl'>
            Ignite Your Wanderlust with Every Bus Ride
          </h2>
        </header>

        <p>
          Traveling by bus offers comfort and stunning views on your way to amazing destinations. With spacious seats and air conditioning, you can relax and enjoy the ride, whether you're heading to a vibrant city or a peaceful getaway. It’s the perfect way to travel affordably and conveniently while experiencing the beauty of the journey.
        </p>

        <p>
          Explore the World by Bus with Ease. Hop on a bus and experience the joy of travel at your own pace. From comfortable seating to scenic routes, our buses offer the perfect way to explore cities, nature, and everything in between. Whether it's a quick trip or a long adventure, sit back, relax, and enjoy the ride.
        </p>

        {/* Call to Action */}
        <a
          href="#booking"
          className=' w-full h-20 bg-cover bg-center rounded-sm flex items-center justify-center text-black'
          style={{ backgroundImage: `url(${Showcase2})` }}
        >
          <span className=' font-bold flex items-center gap-2'>
            BOOK A Bus Now <FaArrowRightLong />
          </span>
        </a>
      </article>
    </section>
  )
}

export default Packages

import React from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import About from '../components/About'
import Facts from '../components/Facts'
import Features from '../components/Features'
import Service from '../components/Service'
import Appointment from '../components/Appointment'
import TeamStart from '../components/TeamStart'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <TopBar />
            <Navbar />
            <Carousel />
            <About />
            <Facts />
            <Features />
            <Service />
            <Appointment />
            <TeamStart />
            <Testimonial />
            <Footer />
        </>
    )
}

export default Home
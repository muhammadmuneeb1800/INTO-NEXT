import "./globals.css";
import React from "react"
import Image from "next/image"
import logo from "../public/doctor-img.svg"
import search from "../public/search-icon.svg"
import app from "../public/Appointment-icon.png"
import hap from "../public/Consultancy-icon.png"
import Footer from "./footer/page"

export default function Home() {
  return (
    <>
      {/* <!-- Hero section  --> */}
    <div className="hero-container">

        {/* <!-- navigation  --> */}

        <header>
            <nav className="nav-container">
                <div className="logo">
                    <a href="index.html"><h2>HEALTCARE</h2></a>
                </div>
                <div className="menu-links">
                    <a href="./doctor.html">Our Doctors</a>
                    <a href="./book.html">Book A Appoinment</a>
                    <a href="./contact.html">Contact Our Doctors</a>
                    <a href="./login.html">Login</a>
                </div>
                <div className="nav-btn">
                    <a href="register.html" className="btn btn-primary">Register Now</a>
                </div>
            </nav>
        </header>
 
        {/* <!-- hero-content  --> */}

        <section className="hero">
            <div className="container">
                <div className="hero-section">
                    <div className="hero-content">
                        <h1>Find And Search Your
                            <span className="hero-text"> Suitable Doctor s</span></h1>
                        <p>Join us and take care of yourself and your family with health services that will make you
                            feel
                            confident and safe in your daily life.</p>
                        <div className="hero-btn">
                            <a href="#" className="btn btn-primary">Live Chat</a>
                            <a href="/" className="btn btn-secondary">Get Appointment</a>
                        </div>
                    </div>
                    <div className="hero-img">
                        <Image src={logo}  alt="doctor-sarah"/>
                    </div>
                </div>
            </div>
        </section>
    </div>

    {/* <!-- steps-sections  --> */}

    <section className="steps-section">
        <div className="container">
            <div className="easy-steps">
                <h2>3 Easy Steps and Get Your Solution</h2>

                <div className="steps-icon-box">
                    <div className="steps">
                        <a href="doctor.html"><Image className="s-i" src={search} alt="search icon"/></a>
                        <h3>Find best doctor s</h3>
                        <p>Find your doctor easily with a minimum of effort. We ve <br/> kept everything organised for
                            you.</p>
                    </div>
                    <div className="steps">
                        <a href="book.html"><Image className="s-i" src={app} alt="appointment icon"/></a>
                        <h3>Get Appointment</h3>
                        <p>Ask for an appointment of the doctor quickly with almost a single <br/> click. We take care of the rest.</p>
                    </div>
                    <div className="steps">
                        <a href=""><Image className="s-i" src={hap} alt="consiltancy icon"/></a>
                        <h3>Happy Consultations</h3>
                        <p>Do consultations and  take the service based on your <br/> appointment. Get back to good health</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

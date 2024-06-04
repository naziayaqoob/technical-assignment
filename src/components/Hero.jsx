// src/Hero.jsx
import React from 'react';
import Testimonials from './Testimonials/Testimonials'
import HeroImg from '../assets/images/hero-banner-img.png'

const Hero = () => {
    return (
        <section className="container max-w-custom mx-auto grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6 order-2 lg:order-none">
                <div className="mb-9">
                    <h1 className="title text-black">
                        Lorem ipsum <span className="highlight d-inline-block">dolor</span> sit amet yo 👋
                    </h1>
                </div>
                <Testimonials />
            </div>
            <div className="col-span-12 lg:col-span-6 order-1 lg:order-none">
                <img src={HeroImg} alt="Hero" className="w-full h-full object-cover rounded-lg" />
            </div>
        </section>
    );
};

export default Hero;

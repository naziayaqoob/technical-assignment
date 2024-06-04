// src/Hero.jsx
import React from 'react';
import Slider from 'react-slick';
import "./Testimonials.css";

const testimonialsData = [
    {
        id: 1,
        image: '/src/assets/images/testimonial1.png',
        name: 'Andrew Schultz',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.'
    },
    {
        id: 2,
        image: '/src/assets/images/testimonial2.png',
        name: 'Andrew Schultz',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.'
    },
    {
        id: 3,
        image: '/src/assets/images/testimonial3.png',
        name: 'Andrew Schultz',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.'
    },
    {
        id: 4,
        image: '/src/assets/images/testimonial2.png',
        name: 'Andrew Schultz',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.'
    },
    {
        id: 5,
        image: '/src/assets/images/testimonial1.png',
        name: 'Andrew Schultz',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.'
    }
];

const Testimonials = () => {
    const sliderSettings = {
        vertical: true,
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    return (
        <Slider {...sliderSettings} className="overflow-visible testimonial-slider">
            {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className="slide">
                    <div className="bg-white rounded-lg shadow-lg p-4 flex items-center mb-3">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="rounded-full mr-4"
                            style={{ width: '64px', height: '64px' }}
                        />
                        <div>
                            <h3 className="text-black mb-3">{testimonial.name}</h3>
                            <p>{testimonial.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Testimonials;

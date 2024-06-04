import React from 'react';
import Slider from 'react-slick';
import './BrandsCarousel.css';

const brandLogos = [
    { id: 1, src: '/src/assets/images/brand1.png', alt: 'Brand 1' },
    { id: 2, src: '/src/assets/images/brand2.png', alt: 'Brand 2' },
    { id: 3, src: '/src/assets/images/brand3.png', alt: 'Brand 3' },
];

const BrandsCarousel = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="container max-w-custom mx-auto py-10 brands-carousel">
            <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-6 lg:col-start-4 mb-9 text-center md:px-20">
                    <h2 className="text-black mb-6">
                        <span className="highlight d-inline-block text-black">Trusted by</span>
                    </h2>
                    <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-10 lg:col-span-10 col-start-2 lg:col-start-2">
                    <Slider {...sliderSettings}>
                        {brandLogos.map((logo) => (
                            <div key={logo.id} className="brand-slide">
                                <img src={logo.src} alt={logo.alt} className="brand-logo" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default BrandsCarousel;

import React from 'react';

const featuresData = [
    {
        icon: '/src/assets/images/support-icon.png',
        heading: '24/7 Support',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        icon: '/src/assets/images/reviews-icon.png',
        heading: '1000+ of reviews',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        icon: '/src/assets/images/more-icon.png',
        heading: 'And more!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
];

const FeatureItem = ({ icon, heading, description }) => (
    <div className="col-span-12 md:col-span-4 flex items-center p-5">
        <img src={icon} alt={`${heading} icon`} className="w-16 h-16 mr-4" />
        <div className="text-left">
            <h3 className="text-lg font-semibold mb-2">{heading}</h3>
            <p>{description}</p>
        </div>
    </div>
);

const Features = () => (
    <section className="container max-w-custom mx-auto p-6 grid grid-cols-12 bg-white rounded-lg mt-12" style={{ boxShadow: '0px 34px 44px -20px rgba(185, 206, 234, 0.25)' }}>
        {featuresData.map((feature, index) => (
            <FeatureItem
                key={index}
                icon={feature.icon}
                heading={feature.heading}
                description={feature.description}
            />
        ))}
    </section>
);

export default Features;

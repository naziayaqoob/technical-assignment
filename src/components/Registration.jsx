import React, { useState, useEffect } from 'react';
import Button from './Button/Button';
import { validateForm } from '../utils/validation';
import HeroImg from '../assets/images/hero-banner-img-2.png';

const Registration = () => {
    const [formData, setFormData] = useState({ name: '', company: '', email: '' });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({ name: '', email: '' });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = validateForm(formData);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        saveFormData(formData);
        setSubmitted(true);
        setShowSuccessMessage(true);
    };

    const saveFormData = (data) => {
        const existingData = JSON.parse(localStorage.getItem('registrationFormData')) || [];
        const newData = [...existingData, data];
        localStorage.setItem('registrationFormData', JSON.stringify(newData));
        setFormData({ name: '', company: '', email: '' });
    };

    useEffect(() => {
        if (submitted) {
          const timer = setTimeout(() => {
            setSubmitted(false);
            setShowSuccessMessage(false);
          }, 3000);
          return () => clearTimeout(timer);
        }
      }, [submitted]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: ''
        }));
      };

    return (
        <section className="container max-w-custom mx-auto grid grid-cols-12 gap-8 mb-8 md:mb-24">
            <div className="lg:col-span-5 col-span-12">
                <img src={HeroImg} alt="Image" className="w-full h-auto" />
            </div>
            <div className="lg:col-span-6 col-span-12 md:col-start-2 bg-white shadow-lg rounded-lg p-6 md:p-12">
                <h2 className="text-2xl font-semibold mb-6 text-black">Registration</h2>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.
                </p>
                {showSuccessMessage && (
                    <div aria-live="polite" className="bg-green-100 border border-green-400 text-green-700 mb-3 px-4 py-3 rounded">
                        <strong className="font-bold block mb-4">Success!</strong>
                        <span className="block">Your form has been submitted successfully.</span>
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-6 mt-10">
                        <label htmlFor="name" className="block mb-2 text-black">Name <span className="text-red-500">*</span></label>
                        <input 
                            type="text" 
                            id="name"
                            placeholder="Enter your name"
                            name="name"
                            value={formData.name} 
                            onChange={handleChange} 
                            className={`appearance-none rounded w-full leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`} 
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="company" className="block mb-2 text-black">Company</label>
                        <input 
                            type="text" 
                            id="company"
                            placeholder="Enter your company name"
                            name="company" 
                            value={formData.company} 
                            onChange={handleChange} 
                            className="appearance-none rounded w-full leading-tight focus:outline-none focus:shadow-outline" 
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-black">Email address <span className="text-red-500">*</span></label>
                        <input 
                            type="text" 
                            id="email"
                            placeholder="Enter your email address"
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className={`appearance-none rounded w-full leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`} 
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        <Button type="secondary">Submit</Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Registration;

import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p>At React Restaurant, we take pride in offering an authentic dining experience rooted in tradition and culture.
                     With over 75 years of experience, we’ve honed our craft and developed a deep understanding of what makes great food. Our restaurant in Erode, Tamil Nadu, 
                     celebrates the rich flavors and cooking techniques that are a hallmark of Tamil culture. 
                    Every dish we serve reflects the heritage and values we hold dear.</p>
                <p>We believe that food should be fresh and pure, 
                    which is why we never use preservatives in any of our meals.
                     Our chefs prepare everything from scratch using the finest locally sourced ingredients.
                      From aromatic spices to fresh vegetables, we ensure that each meal is made with care, 
                    preserving the authentic flavors that our customers love.</p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                <p>Inspired by the culinary traditions of Tamil Nadu, 
                    we offer a wide range of dishes that showcase the best of our native cuisine. 
                    From the beloved South Indian tiffin items to our signature specialties, 
                    every bite is a celebration of Tamil culture. 
                    Whether it's the taste of freshly ground spices, the perfect dosa, or a hearty sambar,
                     our menu brings the warmth of Tamil Nadu to your table.

                    As a family-owned establishment, 
                    we prioritize customer satisfaction and take pride in providing a welcoming atmosphere. 
                    Our staff is dedicated to giving you the best service, 
                    ensuring that your dining experience at React Restaurant is nothing short of memorable.
                     We invite you to come and enjoy a slice of Tamil heritage, one dish at a time.</p>
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>

            <div className='my-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default About;
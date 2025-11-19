import React from 'react';
import Hero from '../components/Hero';
import FeaturedDestination from '../components/FeaturedDestination';
import ExclusiveOffers from '../components/ExclusiveOffers';
import Testimonial from '../components/Testimonial';
import NewsLetter from '../components/NewsLetter';
import RecommndedHotels from '../components/RecommendedHotels';

const Home = () => {
  return (
    <>
        <Hero />
        <RecommndedHotels />
        <FeaturedDestination />
        <ExclusiveOffers />
        <Testimonial />
        <NewsLetter />
    </>
  )
}

export default Home;
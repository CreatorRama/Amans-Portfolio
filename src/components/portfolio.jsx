import React, { useState, useEffect } from 'react';
import Header from './header';
import HeroSection from './hero-section';
import ProjectSection from './projects';
import ContactForm from './contact-form';
import Footer from './footer';
import SkillsSection from './skills';



const Portfolio=()=>{



    return <>
        <Header />
        <HeroSection />
        <SkillsSection />
        <ProjectSection />
        <ContactForm />
        <Footer />
    </>
}

export default Portfolio
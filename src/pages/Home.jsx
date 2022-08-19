import React, { Fragment } from "react";
import AboutUs from "../components/About-us/AboutUs";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Company from "../components/Company-section/Company";
import Courses from "../components/Courses-section/Courses";
import Features from "../components/Feature-section/Features";
import Footer from "../components/Footer/Footer";
import FreeCourse from "../components/Free-course-section/FreeCourse";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import Newsletter from "../components/Newsletter/Newsletter";
import Testimonials from "../components/Testimonial/Testimonals";

const Home = () => {
  return (
  <Fragment>
    <Header />
    <HeroSection />
    <Company/>
    <AboutUs/>
    <Courses/>
    <ChooseUs/>
    <Features/>
    <FreeCourse/>
    <Testimonials/>
    <Newsletter/>
    <Footer/>
  </Fragment>
  )
};

export default Home;

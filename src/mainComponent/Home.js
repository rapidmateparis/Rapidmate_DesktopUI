import React, { useState } from "react";
import "../assets/css/home.css";
import HomeHeader from "./HomeHeader";
import LogoSlider from "./LogoSlider";
import Faq from "./Faq";
import HomeBlog from "./HomeBlog";
import WhyChooseus from "./WhyChooseus";
import Services from "./Services";
import ServicesTypesCard from "./ServicesTypesCard";
import CompanyAchivments from "./CompanyAchivments";
import HomeBannerCard from "./HomeBannerCard";
import DownloadMobileApp from "./DownloadMobileApp";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";
import HomeAboutus from "./HomeAboutus";
import HomeTestimonial from "./HomeTestimonial";


const Home = () => {
  
  return (
    <>
      {/* Header Start Here  */}
      <HomeHeader />
      {/* Header End Here  */}

      {/* Main Home Banner Section start here  */}
      <HomeBannerCard />

      {/* Home Cards Section start here  */}
      <ServicesTypesCard />

      {/* About us section start here  */}
      <HomeAboutus />

      {/* Home Companies trust us Section start here  */}
      <CompanyAchivments />

      {/* Our services Start here  */}
      <Services />

      {/* Why choose us section start here  */}
      <WhyChooseus />

      {/* Testimonial Start Here  */}
      <HomeTestimonial/>

      {/* Latest Blog Section Start here  */}
      <HomeBlog />

      {/* FAQs Section Start Here  */}
      <Faq />

      {/* Contact Form Section Start Here  */}
      <HomeContact />

      {/* Download Moblie App Section Start Here  */}
      <DownloadMobileApp />

      {/* Logo Slider Start Here  */}
      <LogoSlider />

      {/* Footer Section start here  */}
      <HomeFooter />
    </>
  );
};

export default Home;

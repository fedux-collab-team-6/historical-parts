import React from "react";
import Hero from "../../components/Home/Hero";
import FeaturedProducts from "../../components/Home/FeaturedProducts";
import Categories from "../../components/Home/Categories";
import BlogSection from "../../components/Home/BlogSection";
import AboutUs from "../../components/Home/AboutUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <AboutUs />
      <FeaturedProducts />
      <BlogSection />
    </div>
  );
};

export default Home;

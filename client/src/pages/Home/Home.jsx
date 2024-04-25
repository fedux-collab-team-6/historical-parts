import React from "react";
import Hero from "../../components/Hero";
import FeaturedProducts from "../../components/FeaturedProducts";
import Categories from "../../components/Categories";
import BlogSection from "../../components/BlogSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <BlogSection />
    </div>
  );
};

export default Home;

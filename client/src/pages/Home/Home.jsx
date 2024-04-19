import React from "react";
import Hero from "../../components/Hero";
import FeaturedProducts from "../../components/FeaturedProducts";
import Categories from "../../components/Categories";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
    </div>
  );
};

export default Home;

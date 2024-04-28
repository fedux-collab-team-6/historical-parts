import React from "react";
import { featuredBlogData } from "../../constants/data";
import BlogSectionItem from "../CrossApp/BlogSectionItem";

const BlogSection = () => {
  return (
    <section className=" flex flex-col lg:flex-row">
      {featuredBlogData.map((item) => (
        <BlogSectionItem item={item} key={item.id} notHome={false} />
      ))}
    </section>
  );
};

export default BlogSection;

import React, { useEffect, useState } from "react";
import ProductCard from "../CrossApp/ProductCard.jsx";
import useFetch from "../../../hooks/useFetch.js";
import filterstring from "../../helpers/filter.js";
import Pages from "./Pages.jsx";
import { useLocation, useParams } from "react-router-dom";
import { featuredBlogData } from "../../constants/data.js";
import BlogSection from "../Home/BlogSection.jsx";

const ProductsList = ({ catId, selectedFilter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  // const { data, loading, error } = useFetch(
  //   `/products?[filters][categories][id][$eq]=${catId}&populate=*`
  // );

  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][categories][id][$eq]=${catId}${selectedFilter.map((item) => `&[filters][shippingOptions][$eq]=${item}`)}`
  // );

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pageParam = searchParams.get("page");

    if (pageParam) {
      setCurrentPage(parseInt(pageParam));
    }
  }, [location.search, currentPage]);

  const itemsPerPage = 7;
  const filterQuery = encodeURI(filterstring(selectedFilter));
  const pagination = `pagination[page]=${currentPage}&pagination[pageSize]=${itemsPerPage}&`;
  const categoryFilter = `&filters[categories][id][$eq]=${catId}`;

  const { data, loading, error, meta } = useFetch(
    `/products?` + pagination + filterQuery + categoryFilter + "&populate=*"
  );

  if (loading || !data) return <>Loading….</>;
  if (error) return <>Error</>;
  return (
    <>
      <div className="productsList flex justify-start flex-wrap">
        <>
          {data?.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </>
        {/* <div>
          {featuredBlogData?.map((item) => (
            <BlogSection item={item} key={item[0]} />
          ))}
        </div> */}
      </div>
      <div className=" flex justify-center w-full mt-9 text-lg">
        <Pages currentPage={currentPage} maxPage={meta.pagination.pageCount} />
      </div>
    </>
  );
};

export default ProductsList;

import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Product = () => {
  const id = useParams().id;

  const [selectedImg, setSelectedImg] = useState("");

  const { data, loading, error } = useFetch(`/doors/${id}?populate=*`);

  useEffect(() => {
    if (loading || !data) return;
    if (error) return;
    setSelectedImg(data.attributes?.img?.data[0]?.attributes?.url);
  }, [data]);
  const handlerClick = (imgPath) => {
    setSelectedImg(imgPath);
  };
  if (loading || !data) return <>Loading….</>;
  if (error) return <>Error</>;

  return (
    <div className="product py-5 px-12 flex gap-12">
      <div className="left flex-1">
        <div className="images">
          {data.attributes?.img?.data.map((item) => (
            <img
              key={item.id}
              src={item?.attributes?.url}
              onClick={() => handlerClick(item?.attributes?.url)}
            />
          ))}
          {/* <img src={`${data.attributes?.img?.data?.attributes?.url}`} />
          <img src={`${data.attributes?.img?.data?.attributes?.url}`} /> */}
        </div>
        <div className="mainImg">
          <img src={selectedImg} alt="" />
          {/* <img src={`${data.attributes?.img?.data?.attributes?.url}`} alt="" /> */}
        </div>
      </div>
      <div className="right flex-1 flex-col gap-7">
        <h3>Title</h3>
        <span>99kr</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet delectus
          ipsa sed velit repellat commodi mollitia incidunt cum repellendus
          minus.
        </p>
        <button className="addToCartBtn">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="link">
          <FavoriteBorderIcon /> ADD TO WISHLIST
        </div>
        <div className="info">
          <span>Seller: Hassen</span>
          <span>Product Type: Door</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
        </div>
      </div>
    </div>
  );
};

export default Product;

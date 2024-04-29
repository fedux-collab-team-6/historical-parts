import React, { useEffect, useState } from "react";
import { BsChatRightText, BsCart3 } from "react-icons/bs";
import useFetch from "../../../hooks/useFetch";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartReducer";
import Button from "../../components/CrossApp/Button";
import Breadcrumbs from "../../components/CrossApp/Breadcrumbs";

const Product = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const id = useParams().id;

  const [selectedImg, setSelectedImg] = useState("");

  const dispatch = useDispatch();
  // console.log(dispatch);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log(data);
  useEffect(() => {
    if (loading || !data) return;
    if (error) return;
    setSelectedImg(data.attributes?.img?.data[0]?.attributes?.url);
    setPrevLocation(location.pathname);
  }, [location, data]);
  const handlerClick = (imgPath) => {
    setSelectedImg(imgPath);
  };
  // console.log(data, loading, error);
  if (loading || !data) return <>Loading….</>;
  if (error) return <>Error</>;

  return (
    <div className="product px-12  max-w-[1240px] mx-auto mb-10">
      <div>
        <Breadcrumbs title="" prevLocation="" />
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="left flex-[2]">
          <div className="flex flex-col-reverse md:flex-row gap-3">
            <div className="images flex-1 flex-row sm:flex-col">
              {data.attributes?.img?.data.map((item) => (
                <div className=" inline-block mr-3 md:mr-0" key={item.id}>
                  <img
                    className=" md:w-full h-[70px] object-cover cursor-pointer mb-5"
                    src={item?.attributes?.url}
                    onClick={() => handlerClick(item?.attributes?.url)}
                  />
                </div>
              ))}
            </div>
            <div className="mainImg bg-light-100 flex-[7]">
              <img
                className=" w-full h-[500px] object-contain"
                src={selectedImg}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="right flex-1 flex-col gap-7">
          <h4>{data.attributes?.era}</h4>
          <p>{data.attributes?.productDescription}</p>
          <p className=" mt-4">
            <span className=" font-bold mr-2">Seller:</span>{" "}
            {data.attributes?.sellerName}
          </p>
          <h3 className=" mt-6 text-right mb-5">{data.attributes?.price}kr</h3>

          <div
            onClick={() =>
              dispatch(
                addToCart({
                  id: data.id,
                  category: data.attributes.categories.data[0].attributes.title,
                  era: data.attributes.era,
                  desc: data.attributes.productDescription,
                  price: data.attributes.price,
                  img: data.attributes.img.data[0]?.attributes.url,
                })
              )
            }
          >
            <Button
              label="Add to cart"
              primary={true}
              icon={<BsCart3 />}
              textLarge={true}
            />
          </div>
          <Button
            label="Chat with seller"
            primary={false}
            icon={<BsChatRightText />}
            textLarge={true}
          />
        </div>
      </div>
      <div className=" mt-8 max-w-[730px]">
        <h3 className=" bg-light-100 w-full p-3">PRODUCT DESCRIPTION</h3>
        <div className="description w-full p-5 bg-light-100 mt-5">
          <div className=" max-w-[480px] flex flex-col gap-y-8">
            <div className="style border-t-[1px] border-coral-400 pt-2 w-full">
              <h4>Style Description</h4>
              <p>{data.attributes?.styleDescription}</p>
            </div>
            <div className="measurment w-full border-t-[1px] border-coral-400 pt-2 mr-40">
              <h4>Measurements</h4>
              <p>
                <span className=" font-bold mr-2">Height:</span>
                {data.attributes?.height} cm
              </p>
              <p>
                <span className=" font-bold mr-2">Width: </span>
                {data.attributes?.width} cm
              </p>
              <p>
                <span className=" font-bold mr-2">Depth: </span>
                {data.attributes?.depth} cm
              </p>
            </div>
            <div className="materials w-full border-t-[1px] border-coral-400 pt-2 mr-40">
              <h4>material</h4>
              <p>{data.attributes?.materials}</p>
            </div>
            <div className="condition w-full border-t-[1px] border-coral-400 pt-2 mr-40">
              <h4>Condition</h4>
              <p>{data.attributes?.condition}</p>
            </div>
            <div className="location w-full border-t-[1px] border-coral-400 pt-2 mr-40">
              <h4>location</h4>
              <p>{data.attributes?.location}</p>
            </div>
            <div className="Delivery w-full border-t-[1px] border-coral-400 pt-2 mr-40">
              <h4>Delivery option</h4>
              <p>{data.attributes?.shippingOptions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

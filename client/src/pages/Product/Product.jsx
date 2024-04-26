import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartReducer";

const Product = () => {
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
  }, [data]);
  const handlerClick = (imgPath) => {
    setSelectedImg(imgPath);
  };
  // console.log(data, loading, error);
  if (loading || !data) return <>Loading….</>;
  if (error) return <>Error</>;

  return (
    <div className="product py-10 px-12  max-w-[1240px] mx-auto">
      <div>Breadcrumb</div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="left flex-[2]">
          <div className="flex flex-col-reverse md:flex-row gap-5">
            <div className="images flex-1 flex-row md:flex-col">
              {data.attributes?.img?.data.map((item) => (
                <div className=" inline-block mr-3 md:mr-0" key={item.id}>
                  <img
                    className=" md:w-full h-[150px] object-cover cursor-pointer mb-5"
                    src={item?.attributes?.url}
                    onClick={() => handlerClick(item?.attributes?.url)}
                  />
                </div>
              ))}
              {/* <img src={`${data.attributes?.img?.data?.attributes?.url}`} />
              <img src={`${data.attributes?.img?.data?.attributes?.url}`} /> */}
            </div>
            <div className="mainImg bg-light-100 flex-[5]">
              <img
                className=" w-full h-[500px] object-contain"
                src={selectedImg}
                alt=""
              />
              {/* <img src={`${data.attributes?.img?.data?.attributes?.url}`} alt="" /> */}
            </div>
          </div>
        </div>
        <div className="right flex-1 flex-col gap-7">
          <h2 className=" text-xl font-bold">{data.attributes?.era}</h2>
          <p className=" mt-4">{data.attributes?.productDescription}</p>
          <p className=" mt-4">
            <span className=" font-bold mr-2">Seller:</span>{" "}
            {data.attributes?.sellerName}
          </p>
          <p className=" mt-6 font-bold text-3xl text-right mb-5">
            {data.attributes?.price}kr
          </p>

          <button
            className=" block bg-spindle-900 text-light-200 rounded-full w-full text-sm px-10 mt-4 py-2"
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
            <AddShoppingCartIcon fontSize="40px" /> Add to cart
          </button>
          <button className="block bg-coral-400 text-light-200 rounded-full w-full text-sm px-10 mt-4 py-2">
            Chat with seller
          </button>

          {/* <div className="info">
            <span>
              Product Type:{" "}
              {data.attributes?.categories?.data[0]?.attributes?.title}
            </span>
          </div> */}
        </div>
      </div>
      <div className=" mt-8 max-w-[730px]">
        <h2 className=" text-2xl font-bold bg-light-100 w-full p-3">
          PRODUCT DESCRIPTION
        </h2>
        <div className="description w-full p-5 bg-light-100 mt-5">
          <div className=" max-w-[480px] flex flex-col gap-y-8">
            <div className="style border-t-[1px] border-coral-400 pt-2 w-full">
              <h3 className=" text-lg font-bold">Style Description</h3>
              <p className=" mt-3">{data.attributes?.styleDescription}</p>
            </div>
            <div className="measurment w-full border-t-[1px] border-coral-400 pt-2 mr-40">
              <h3 className=" text-lg font-bold">Measurements</h3>
              <p className=" mt-3">
                <span className=" font-bold mr-2">Height:</span>
                {data.attributes?.height} cm
              </p>
              <p className=" mt-3">
                <span className=" font-bold mr-2">Width: </span>
                {data.attributes?.width} cm
              </p>
              <p className=" mt-3">
                <span className=" font-bold mr-2">Depth: </span>
                {data.attributes?.depth} cm
              </p>
            </div>
            <div className="materials w-full border-t-[1px] border-coral-400 pt-2 mr-40">
              <h3 className=" text-lg font-bold">material</h3>
              <p className=" mt-3">{data.attributes?.materials}</p>
            </div>
            <div className="condition w-full border-t-[1px] border-coral-400 pt-2 mr-40">
              <h3 className=" text-lg font-bold">Condition</h3>
              <p className=" mt-3">{data.attributes?.condition}</p>
            </div>
            {/* <div className="frame w-full border-t-[1px] border-coral-400 pt-2 mr-40">
              <h3 className=" text-lg font-bold">Frame</h3>
              <p className=" mt-3">{data.attributes?.depth}</p>
            </div> */}
            <div className="location w-full border-t-[1px] border-coral-400 pt-2 mr-40">
              <h3 className=" text-lg font-bold">location</h3>
              <p className=" mt-3">{data.attributes?.location}</p>
            </div>
            {/* <div className="Delivery w-full border-t-[1px] border-coral-400 pt-2 mr-40">
              <h3 className=" text-lg font-bold">material</h3>
              <p className=" mt-3">Wood</p>
            </div> */}
            <div className="Delivery w-full border-t-[1px] border-coral-400 pt-2 mr-40">
              <h3 className=" text-lg font-bold">Delivery option</h3>
              <p className=" mt-3">{data.attributes?.shippingOptions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

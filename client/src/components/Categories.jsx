import "../components/style-components/categories.css";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const { data, loading, error } = useFetch("/categories?populate=*");
  return (
    <div className=" flex flex-col justify-center items-center mt-10">
      <h2 className=" text-center mb-7 text-3xl font-bold">Categories</h2>

      <div className="categories">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          data?.map((item) => <CategoryItem item={item} key={item._id} />)
        )}

        {/* <button>
          <img src="./images/cat-door.jpg" alt="Cat door" />
          <Link className="link" to="/products/1">
            Doors
          </Link>
        </button>
        <button>
          <img src="./images/cat-window.jpg" alt="" />
          <Link to="/products/1" className="link">
            Windows
          </Link>
        </button>
        <button>
          <img src="./images/cat-tile.jpg" alt="" />
          <Link to="/products/1" className="link">
            Tiles
          </Link>
        </button>
        <button>
          <img src="./images/cat-roof.jpg" alt="" />

          <Link to="/products/1" className="link">
            Roofs
          </Link>
        </button>
        <button>
          <img src="./images/cat-floor.jpg" alt="" />

          <Link to="/products/1" className="link">
            Floors
          </Link>
        </button>
        <button>
          <img src="./images/cat-door.jpg" alt="" />
          <Link to="/products/1" className="link">
            Shoes
          </Link>
        </button> */}
      </div>
    </div>
  );
};

export default Categories;

import "../components/style-components/categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <h2 className=" text-center mb-7 text-3xl font-bold">Categories</h2>

      <div className="categories">
        <button>
          <img src="../public/images/cat-door.jpg" alt="Cat door" />
          <Link className="link" to="/products/1">
            Doors
          </Link>
        </button>
        <button>
          <img src="../public/images/cat-window.jpg" alt="" />
          <Link to="/products/1" className="link">
            Windows
          </Link>
        </button>
        <button>
          <img src="../public/images/cat-tile.jpg" alt="" />
          <Link to="/products/1" className="link">
            Tiles
          </Link>
        </button>
        <button>
          <img src="../public/images/cat-roof.jpg" alt="" />

          <Link to="/products/1" className="link">
            Roofs
          </Link>
        </button>
        <button>
          <img src="../public/images/cat-floor.jpg" alt="" />

          <Link to="/products/1" className="link">
            Floors
          </Link>
        </button>
        <button>
          <img src="../public/images/cat-door.jpg" alt="" />
          <Link to="/products/1" className="link">
            Shoes
          </Link>
        </button>

      </div>
    </>
  );
};

export default Categories;

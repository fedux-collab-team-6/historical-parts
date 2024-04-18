import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <h2 className=" text-center mb-7 text-3xl font-bold">Categories</h2>
      <div className="categories flex h-[80vh] gap-2.5 m-2.5">
        <div className="col">
          <div className="row">
            <img src="../images/cat-door.jpg" alt="" />
            <button>
              <Link className="link" to="/products/1">
                Doors
              </Link>
            </button>
          </div>
          <div className="row">
            <img src="../images/cat-window.jpg" alt="" />
            <button>
              <Link to="/products/1" className="link">
                Windows
              </Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            {" "}
            <img src="../images/cat-tile.jpg" alt="" />
            <button>
              <Link to="/products/1" className="link">
                Tiles
              </Link>
            </button>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                <img src="../images/cat-roof.jpg" alt="" />
                <button>
                  <Link to="/products/1" className="link">
                    Roofs
                  </Link>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
                {" "}
                <img src="../images/cat-floor.jpg" alt="" />
                <button>
                  <Link to="/products/1" className="link">
                    Floors
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <img src="../images/cat-door.jpg" alt="" />
            <button>
              <Link to="/products/1" className="link">
                Shoes
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;

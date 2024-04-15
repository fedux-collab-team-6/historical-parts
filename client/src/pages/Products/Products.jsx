import React from "react";

const Products = () => {
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h4>Price</h4>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Giveaway</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Purchase</label>
          </div>
        </div>
        <div className="filterItem">
          <h4>Location</h4>
        </div>
        <div className="filterItem">
          <h4>Delivery Time</h4>
        </div>
        <div className="filterItem">
          <h4>Shipping Options</h4>
        </div>
        <div className="filterItem">
          <h4>Material</h4>
        </div>
        <div className="filterItem">
          <h4>Era</h4>
        </div>
        <div className="filterItem">
          <h4>Size</h4>
        </div>
        <div className="filterItem">
          <h4>Condition</h4>
        </div>
        <div className="filterItem">
          <h4>Frame</h4>
        </div>
        <div className="filterItem">
          <h4>Details</h4>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Products;

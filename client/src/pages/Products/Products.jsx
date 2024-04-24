import { useState } from "react";
import ProductsList from "../../components/ProductsList";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const { data, loading, error } = useFetch(
    `products?[filters][categories][id][$eq]=${catId}&populate=*`
  );
  // const { data, loading, error } = useFetch(`/categories/${catId}?populate=*`);
  // console.log(data);

  const testfilter = {
    shippingOptions: "Get a shipping price",
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedFilter(
      isChecked
        ? [...selectedFilter, value]
        : selectedFilter.filter((item) => item !== value)
    );
  };
  console.log("filter:  " + selectedFilter);

  if (loading || !data) return <>Loading….</>;
  if (error) return <>Error</>;
  return (
    <div className="products py-7 px-12 flex gap-4">
      <div className="left flex-1 sticky h-full top-12">
        <div className="filterItem">
          <h4>Price</h4>
          <div className="inputItem">
            <span>0kr</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}kr</span>
          </div>
        </div>
        <div className="filterItem">
          <h4>Shipping Options</h4>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.shippingOptions}</label>
              {/* <br />
            <input
              type="radio"
              id="delivery"
              value="delivery"
              name="shippingOption"
            />
            <label htmlFor="delivery">Home delivery within 2-3 days</label> */}
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h4>Material</h4>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Wood</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Steel</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Fiberglass</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="4" value={4} />
            <label htmlFor="4">Aluminum</label>
          </div>
        </div>
        <div className="filterItem">
          <h4>Era</h4>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Allmoge</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Pre-1880s</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">1880s New Renaissance</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="4" value={4} />
            <label htmlFor="4">1890s Neo-Styles</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="5" value={5} />
            <label htmlFor="5">1900-1910s Art Nouveau</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="6" value={6} />
            <label htmlFor="6">1910s Art Nouveau, National Romanticism</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="7" value={7} />
            <label htmlFor="7">
              1920s Swedish Grace, 20th-century Classicism
            </label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="8" value={8} />
            <label htmlFor="8">1930s Functionalism</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="9" value={9} />
            <label htmlFor="9">
              1940-1950s Modernism, Folkhem Architecture
            </label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="10" value={10} />
            <label htmlFor="10">1965-1974 Million Homes Programme</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="11" value={11} />
            <label htmlFor="11">After 1974</label>
          </div>
        </div>
        <div className="filterItem">
          <h4>Condition</h4>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Good condition</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Okey condition</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Needs renovation</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="4" value={4} />
            <label htmlFor="4">Missing handles</label>
          </div>
        </div>
        {/* <div className="filterItem">
          <h4>Size</h4>
        </div> */}
        <div className="filterItem">
          <h4>Frame</h4>
          <div className="inputItem">
            <input type="radio" id="included" value="included" name="frame" />
            <label htmlFor="included">Included</label>
            <br />
            <input
              type="radio"
              id="notincluded"
              value="notincluded"
              name="frame"
            />
            <label htmlFor="notincluded">Not included</label>
          </div>
        </div>
        {/* <div className="filterItem">
          <h4>Details</h4>
        </div> */}
      </div>
      <div className="right" style={{ flex: "3" }}>
        <ProductsList
          catId={catId}
          maxPrice={maxPrice}
          selectedFilter={testfilter}
        />
      </div>
    </div>
  );
};

export default Products;

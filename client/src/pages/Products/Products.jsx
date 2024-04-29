import { useState } from "react";
import ProductsList from "../../components/Products/ProductsList";
import useFetch from "../../../hooks/useFetch";
import { filterCriteria } from "../../components/Products/filterCritera";
import CategoryTabs from "../../components/Products/CategoryTabs";
import { useParams, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/CrossApp/Breadcrumbs";
import Skeleton from "../../components/CrossApp/Skeleton";

const Products = () => {
  const catId = parseInt(useParams().id);
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const { data, loading, error } = useFetch(
    `products?[filters][categories][id][$eq]=${catId}&populate=*`
  );
  // const { data, loading, error } = useFetch(`/categories/${catId}?populate=*`);
  // console.log(data);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    const group = e.target.dataset.group;
    const name = e.target.name;
    const filter = { ...selectedFilter };
    const filterArray = filter[group] || [];
    if (isChecked) {
      if (!filterArray.includes(name)) {
        filterArray.push(name);
      }
    } else {
      const index = filterArray.indexOf(name);
      if (index !== -1) {
        filterArray.splice(index, 1);
      }
    }

    filter[group] = filterArray;
    if (filter[group].length === 0) {
      delete filter[group];
    }
    console.log(filter); // keeping for further filter work
    setSelectedFilter(filter);
  };

  const handlePrice = (e) => {
    const filter = { ...selectedFilter };
    filter.price = e.target.value;
    setSelectedFilter(filter);
  };

  if (loading || !data) return <>Loading….</>;
  if (error) return <>Error</>;

  return (
    <div className="w-full mb-10">
      <div className="px-4 max-w-[1440px] mx-auto ">
        <Breadcrumbs title="" prevLocation="" />

        <div className="gap-4 flex">
          <div className="left flex-1 sticky h-full top-36">
            <div className="filterItem">
              <h5 className=" font-[600]">Price</h5>
              <div className="inputItem text-base flex items-center gap-2">
                <span>0kr</span>
                <input
                  type="range"
                  min={0}
                  max={1000}
                  onMouseUp={handlePrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
                <span>{maxPrice}kr</span>
              </div>
            </div>
            <div className="filterItem">
              <h5>Shipping Options</h5>
              {filterCriteria[0].options.map((option) => {
                return (
                  <div className="inputItem">
                    <input
                      type="checkbox"
                      id={"shipping" + option.id}
                      onChange={handleChange}
                      name={option.criteria}
                      data-group="shippingOptions"
                    />
                    <label htmlFor={"shipping" + option.id}>
                      {option.criteria}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="filterItem">
              <h5>Material</h5>
              {filterCriteria[1].options.map((option) => {
                return (
                  <div className="inputItem">
                    <input
                      type="checkbox"
                      id={"materials" + option.id}
                      onChange={handleChange}
                      name={option.criteria}
                      data-group="materials"
                    />
                    <label htmlFor={"materials" + option.id}>
                      {option.criteria}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="filterItem">
              <h5>Era</h5>
              {filterCriteria[2].options.map((option) => {
                return (
                  <div className="inputItem">
                    <input
                      type="checkbox"
                      id={"era" + option.id}
                      onChange={handleChange}
                      name={option.criteria}
                      data-group="era"
                    />
                    <label htmlFor={"era" + option.id}>{option.criteria}</label>
                  </div>
                );
              })}
            </div>
            <div className="filterItem">
              <h5>Condition</h5>
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
            <div className="filterItem">
              <h5>Frame</h5>
              <div className="inputItem">
                <input
                  type="radio"
                  id="included"
                  value="included"
                  name="frame"
                />
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
          </div>
          <div className="right mx-auto flex-[3]">
            <div className=" flex flex-1 mb-2 flex-wrap items-center justify-start gap-2 ">
              <p className=" font-[500]">Shop by Category:</p>
              <CategoryTabs />
            </div>
            <ProductsList
              catId={catId}
              maxPrice={maxPrice}
              selectedFilter={selectedFilter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

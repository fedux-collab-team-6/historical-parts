import useFetch from "../../hooks/useFetch";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const { data, loading, error } = useFetch("/categories?populate=*");
  return (
    <div className=" flex flex-col justify-center items-center mt-10">
      <div className="flex flex-row justify-center gap-10 w-full overflow-x-scroll sm:overflow-x-hidden">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          data?.map((item) => <CategoryItem item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default Categories;

import CategorySlider from "./categories/CategorySlider";
import "./CategoryPage.css";

const CategoryPage = () => {
  return (
    <>
      <div className="categoryPage__container">
        <p id="categoryHeader"> Categories</p>
        <CategorySlider />
      </div>
    </>
  );
};
export default CategoryPage;

import { Link } from "react-router-dom";
import {
  CategoryContainer,
  BackgroundImage,
  CategoryBodyContainer,
} from "./category-item.style.jsx";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const name=title.toString().toLowerCase();
  console.log("🚀 ~ file: category-item.componets.jsx:11 ~ CategoryItem ~ name:", name)
  
  return (
    <CategoryContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <Link to={`/shop/${name}`}><h2>{title}</h2></Link>
        <p> Show Now </p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};
export default CategoryItem;

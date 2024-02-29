import { useState, useEffect } from "react";
import { getCategories } from "../services/apiFacade";
import { Link, useSearchParams } from "react-router-dom";

export const Categories = () => {
  const [categories, setCategories] = useState<Array<string>>();
  
  const [queryString] = useSearchParams();
  const initialCategory = queryString.get("category");

  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);
  return (
    <>
      <h2>Categories</h2>
      <p>Browse recipes by category.</p>

      <ul>
        {categories?.map((category) => (
          <li key={category}>
            {category}
            <Link to={`/recipes?category=${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export const Desktops = () => <h3>Desktop PC Page</h3>;
export const Laptops = () => <h3>Laptops Page</h3>;

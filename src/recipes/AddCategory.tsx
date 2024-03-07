import { useRef } from "react";
import { addCategory } from "../services/apiFacade";
import { useNavigate } from "react-router-dom";

export default function AddCategory() {
  const category = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const submitNewCategory = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const categoryName = category.current?.value || "";
    addCategory({ id: 0, name: categoryName }) // Provide a temporary id value (e.g., 0) for a new category
      .then(() => {
        navigate("/categories");
      })
      .catch((error) => {
        console.error("Error adding category:", error);
      });
  };

  return (
    <>
      <h2>Add Category</h2>
      <form onSubmit={submitNewCategory}>
        <label htmlFor="name">Name</label>&nbsp;
        <input type="text" id="name" ref={category} />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

import { Route, Routes } from "react-router-dom";
import { Categories } from "./recipes/Categories";
import Recipe from "./recipes/Recipe";
import Recipes from "./recipes/RecipeList";
import RecipeForm from "./recipes/RecipeForm";
import Login from "./security/Login";
import Logout from "./security/Logout";
import Layout from "./Layout";
import Home from "./Home";
import "./App.css";
import RecipesLayout from "./recipes/RecipesLayout";
import RequireAuth from "./security/RequireAuth";
import AddCategory from "./recipes/AddCategory";

export default function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/" element={<Categories />} />
        <Route path="/recipes" element={<RecipesLayout/>}>
          <Route index element={<Recipes />} />
          <Route path=":id" element={<Recipe />} />
        </Route>
        <Route path="/add" element={<RequireAuth roles={["ADMIN", "USER"]}><RecipeForm /></RequireAuth>} />
        <Route path="/addCategory" element={<RequireAuth roles={["ADMIN", "USER"]}><AddCategory/></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h2>Not Found</h2>} />
        <Route path="/contact" element={<p>Alle mine kontaktoplysninger indsættes her</p>} />
        <Route path="/logout" element={<Logout />} /> 
      </Routes>
    </Layout>
  );
}

import HomePage from "../pages/HomePage";
import Search from "../pages/Search";
import RecipeDetails from "../pages/RecipeDetails";

export const appRoutes = [
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <Search />,
  },

  {
    path: "/recipe/:id",
    element: <RecipeDetails />,
  },
];
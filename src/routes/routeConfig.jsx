import HomePage from "../pages/HomePage";
import Search from "../pages/Search";
import Categories from "../pages/Categories";
import Areas from "../pages/Areas";
import Favourites from "../pages/Favourites";
import MealPlanner from "../pages/MealPlanner";
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
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/areas",
    element: <Areas />,
  },
  {
    path: "/favorites",
    element: <Favourites />,
  },
  {
    path: "/meal-planner",
    element: <MealPlanner />,
  },
  {
    path: "/recipe/:id",
    element: <RecipeDetails />,
  },
];
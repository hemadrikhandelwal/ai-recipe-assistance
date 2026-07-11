import{RouterProvider, createBrowserRouter} from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import { appRoutes } from "./routeConfig";

const router = createBrowserRouter([
   {
    path:'/',
    element:<LoginPage/>,
    },{
        element:<ProtectedRoute/>,
        children:[
            {
                element:<MainLayout/>,
                children:appRoutes
            }
        ]
    }
])


function AppRoutes(){
    return <RouterProvider router={router}/>
}

export default AppRoutes;

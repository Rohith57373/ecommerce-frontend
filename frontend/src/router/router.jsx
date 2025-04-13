import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Cartpage from "../pages/books/Cartpage";
import { FaWhatsapp } from "react-icons/fa6";
import Whatsapp from "../components/Whatsapp";
import Checkout from "../pages/books/Checkout";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpdateBook from "../pages/dashboard/Editbook/UpdateBook";

// import DashboardLayout from "../pages/dashboard/DashboardLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,

            },
            {
                path: "/orders",
                element: <OrderPage />,

            },
            {
                path: "/login",
                element: <Login />,

            },
            {
                path: "/register",
                element: <Register />,

            },
            {
                path: "/cart",
                element: <Cartpage />,

            },
            {
                path: "/checkout",
                element: <PrivateRoute> <Checkout /></PrivateRoute>,

            },
            {
                path: "/books/:id",
                element: <SingleBook />
            },
            // test
            {
                path: "/test",
                element: <SingleBook />
            }

        ]
    },
    {
        path: "/admin",
        element: <AdminLogin />
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                // path: "",
                index: true,
                element: <AdminRoute> <Dashboard /> </AdminRoute>
            },
            {
                path: "add-new-book",
                element: <AdminRoute> <AddBook /></AdminRoute>,
            },
            {
                path: "edit-book/:id",
                element: <AdminRoute> <UpdateBook/> </AdminRoute>
            },
            {
                path: "manage-books",
                element: <AdminRoute> <ManageBooks /> </AdminRoute>
            }

        ]
    }
]);

export default router;

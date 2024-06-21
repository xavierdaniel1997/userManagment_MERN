import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layouts/AdminView"; 

const adminRouter = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout/>
    }
])
export {adminRouter}
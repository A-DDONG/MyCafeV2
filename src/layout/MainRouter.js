import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CafeMain from "../comps/CafeMain";
import CafeInput from "../comps/CafeInput";
import CafeList from "../comps/CafeList";
import CafeUpdate from "../comps/CafeUpdate";
import Home from "../comps/Home";
import App from "../App";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <Home /> },
        {
          path: "/recipe",
          element: <CafeMain />,
          children: [
            { path: "insert", element: <CafeInput /> },
            { path: "list", element: <CafeList /> },
            { path: "update/:id", element: <CafeUpdate /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default MainRouter;

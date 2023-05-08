import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test1 from "./test1";
import Test2 from "./test2";
import Test3 from "./test3";
import Test4 from "./test4";
import CustomPropsExport1 from "./demo/index.tsx";
import type { RouteObject } from "react-router";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/test1",
        element: <Test1 />,
      },
      {
        path: "/test2",
        element: <Test2 />,
      },
      {
        path: "/test3",
        element: <Test3 />,
      },
      {
        path: "/test4",
        element: <Test4 />,
      },
      {
        path: "/demo1",
        element: <CustomPropsExport1 />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(<RouterProvider router={router} />);

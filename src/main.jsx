
import ReactDOM from 'react-dom/client'
import './index.css'
import * as React from "react";
import Root from './components/characters'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DetailsCard from './components/singleCard';
import ErrorPage from './components/error-page';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
      {
        path: "cards/:cardId",
        element: <DetailsCard />,
      },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
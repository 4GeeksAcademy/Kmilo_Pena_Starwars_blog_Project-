
import ReactDOM from 'react-dom/client'
import './index.css'
import * as React from "react";
import Characters from './components/characters'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DetailsCard from './components/singleCard';
import ErrorPage from './components/error-page';
import Planets from './components/planets';
import Transportation from './components/transportation';
import DetailsCardCharacters from './components/singleCard';
import DetailsCardPlanets from './components/detailsCardPlanets';
import DetailsCardTransportation from './components/detailsTransportation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Characters />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Planets />,
        children: [
          {
            path: "/",
            element: <Transportation />,
          },
        ],
      },
    ],
  },
  
      {
        path: "/detailsCharacters/:name",
        element: <DetailsCardCharacters />,
      },
      {
        path: "/detailsPlanets/:name",
        element: <DetailsCardPlanets />,
      },
      {
        path: "/detailsTransportation/:name",
        element: <DetailsCardTransportation />,
      },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
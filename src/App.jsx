
//import * as ReactDOM from "react-dom/client";
import { NavigationBar } from './components/navbar'
import { Root } from './components/characters'
import * as React from "react";
//import * as ReactDOM from "react-dom/client";
//  import {
//    createBrowserRouter,
//    RouterProvider,
//  } from "react";


 export function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <NavigationBar />
      <Root />
    </div>
    </>
  )
}


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("characters")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
 //}

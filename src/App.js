import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"
//import Grocery from "./components/Grocery";

//Dynamic bundling
//Lazy Loading..
//Code Splitting
//Dynamic Import
//Chunking
const Grocery = lazy(() => {
  import("./components/Grocery");
  console.log('Lazy loading...');
});

//const heading = React.createElement("h1",{id:"heading"},"React replaced previous code");
//JSX(transpiled before it reaches the JS)- Parcel - Babel
//JSX=> React.createElement=>ReactElement-JS Object=> HTML Element(render)
const Applayout = () => {
  return (
    <Provider store={ appStore }>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
    
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...⏱</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

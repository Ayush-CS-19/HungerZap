import React, { lazy, Suspense } from "react";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Header from "./components/Header";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import RestraurantMenu from "./components/restrauntMenu";
import Footer from "./components/Footer";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/shimmer";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./components/Cart";

const id = document.getElementById("root");

// LAZY LOADING, CHUNKING, CODE SPLITTING, DYNAMIC BUNDLING, ON DEMAND LOADING, DYNAMIC IMPORT
const About = lazy(() => import("./components/about"));

const AppLayout = () => {
  return (
    <Provider store={AppStore}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto w-full">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-6">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraurants/:resId",
        element: <RestraurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(id);
root.render(<RouterProvider router={appRouter} />);

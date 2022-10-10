import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Analytics from "./components/Analytics/Analytics";
import Blog from "./components/Blog/Blog";
import Main from "./layout/Main";
import Error from "./page/Error/Error";
import Home from "./page/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home />,
        },
        {
          path: "/analytics",
          element: <Analytics />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

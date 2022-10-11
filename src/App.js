import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Analytics from "./components/Analytics/Analytics";
import Blog from "./components/Blog/Blog";
import Main from "./layout/Main";
import Error from "./page/Error/Error";
import Home from "./page/Home";
import Quiz from "./components/Quiz/Quiz";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home />,
        },
        {
          path: "/quiz/:quizId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <Quiz />,
        },
        {
          path: "/analytics",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
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

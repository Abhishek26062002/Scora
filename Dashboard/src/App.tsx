import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Tests from "./pages/tests/Tests";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
// import Login from "./pages/login/Login";
import "./styles/global.scss";
import Test from "./pages/test/Test";
import Analytics from "./pages/analytics/Analytics";
import Courses from "./pages/courses/Courses";
import DescriptiveQuestions from "./components/alltests/test2";
import Mcq from "./components/alltests/test1";
import Settings from "./pages/settings/Settings";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main" style={{overflowX: "hidden", height: "100%", width: "100%"}}>
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/tests",
          element: <Tests />,
        },
        {
          path: "/tests/evaluate/:id",
          element: <Test />,
        },
        {
          path: "/tests/attempt/1",
          element: <Mcq />,
        },
        {
          path: "/tests/attempt/2",
          element: <DescriptiveQuestions />,
        },
        {
          path: "/analytics",
          element: <Analytics />,
        },
        {
          path: "/courses",
          element: <Courses />
        },
        {
          path: "/settings",
          element: <Settings />
        }
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import Goal from "../pages/Goal/Goal";
import Home from "../pages/Home/Home";
import LatestInBNLP from "../pages/LatestInBNLP/LatestInBNLP";
import Publications from "../pages/Publications/Publications";
import Collaboration from "../pages/Collaboration/Collaboration";
import Team from "../pages/Team/Team";
import OngoingProjects from "../pages/OngoingProjects/OngoingProjects";
import Root from "../layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/goal",
        element: <Goal />,
      },
      {
        path: "/latest",
        element: <LatestInBNLP />,
      },
      {
        path: "/publications",
        element: <Publications />,
      },
      {
        path: "/collaborations",
        element: <Collaboration />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/ongoing-projects", 
        element: <OngoingProjects />, 
      },
    ],
  },
]);

export default router;

import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Main/Main";
import Myself from "../Pages/Myself/Myself";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
            path: "/",
            element: <Home/>,
        },
        {
          path: '/myself',
          element: <Myself></Myself>
        }
      ]
    },
    
  ]);

  
  
  export default router;
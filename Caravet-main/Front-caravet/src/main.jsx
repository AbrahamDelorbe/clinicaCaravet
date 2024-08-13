import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import "./index.css";

import Consejos from "./pages/Consejos.jsx";
import CitasPage from "./pages/citas.jsx";
import Buzon from "./components/buzon.jsx";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

const ruta = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

{path:"/buzon", element: <Buzon />},

  {
    path: "/citas",
    element: <CitasPage />,
  },

  {
    path: "/consejos",
    element: <Consejos />,
  },
]);
//

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-dg0vm5wxbc67vztx.us.auth0.com"
      clientId="RLINtxNxex5g0PC90JOFZyK1ar4VeJH7"
      redirectUri={window.location.origin}
    >
      <RouterProvider router={ruta}>
        <App />
        
      </RouterProvider>
    </Auth0Provider>
  </React.StrictMode>
);

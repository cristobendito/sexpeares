import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discos from "./pages/Discos";
import Conciertos from "./pages/Conciertos";
import Videos from "./pages/Videos";
import Press from "./pages/Press";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage"; 

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/home" element={<Home />} />
        <Route path="/discografia" element={<Discos />} />
        <Route path="/conciertos" element={<Conciertos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/press" element={<Press />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

/*import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Discos from "./pages/Discos";
import Conciertos from "./pages/Conciertos";
import Videos from "./pages/Videos";
import Press from "./pages/Press";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage"; 
import Navbar from "./components/navbar/navbar"; 

const router = createBrowserRouter([
    

            {
                path: "/",
                element: <Home />
            },
            {
                path: "/discografia",
                element: <Discos />
            },import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discos from "./pages/Discos";
import Conciertos from "./pages/Conciertos";
import Videos from "./pages/Videos";
import Press from "./pages/Press";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage"; 

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/discografia" element={<Discos />} />
        <Route path="/conciertos" element={<Conciertos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/press" element={<Press />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

            {
                path: "/conciertos",
                element: <Conciertos />
            },
            {
                path: "/videos",
                element: <Videos />
            },
            {
                path: "/press",
                element: <Press />
            },
         

]);

export default router;

 path: "/",
element: <Root />,
errorElement: <ErrorPage />,
children: [

] */
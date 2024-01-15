import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Router = () => {
    return (
        <>
          {/* <Header /> */}
          <BrowserRouter>
              <Route component={Home} path="/" exact />
              <Route component={About} path="/about" />
              <Route component={Contact} path="/contact" />
          </BrowserRouter>
          {/* <Footer /> */}
        </>
    );
};

export default Router;

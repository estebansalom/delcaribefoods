import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./resources/css/main.css";
import Contact from "./components/contact/Contact.js";
import Header from "./components/header/Header.js";
import Parallax from "./components/parallax/Parallax";
import SmoothScroll from "smooth-scroll";
import About from "./components/about/About";
import Products from "./components/products/Products";
import FrozenProducts from "./components/products/FrozenProducts";
import { Context } from "./components/Wrapper";
import { useContext } from "react";
import Claims from "./components/claims/Claims";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const data = {
  Contact: {
    address: "Calle 112, La Asunción, Belén, Heredia.",
    phone: "+506 7143 1977",
    email: "max.cruz@delcaribefoodscr.com",
    instagram: "/",
    facebook: "/",
    whatsapp: "wa.link/m7mzi9",
  },
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Claims></Claims>
        <Products></Products>
        <FrozenProducts></FrozenProducts>
        <Parallax></Parallax>
        <About></About>
        <Contact data={data.Contact} />
      </div>
    </Router>
  );
}

export default App;

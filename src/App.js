import logo from "./logo.svg";
import "./App.css";
import "./resources/css/main.css";
import Contact from "./components/Contact";

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
    <div className="App">
      <h1>Del Caribe Foods Web Page coming here soon.</h1>
      <Contact data={data.Contact} />
    </div>
  );
}

export default App;

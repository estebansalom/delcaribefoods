import logo from "./logo.svg";
import "./App.css";
import "./resources/css/main.css";
import Contact from "./components/Contact";

const data = {
  Contact: {
    address: "Calle 112, La Asunción, Belén, Heredia.",
    phone: "+506 84336258",
    email: "max.cruz@deltropicofoods.com",
    instagram: "/",
    facebook: "/",
    whatsapp: "https://wa.link/t2gq2q",
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

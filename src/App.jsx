import Navbar from "./components/navbar/Navbar";
import "./layout.scss";
import Home from "./pages/Home";

function App() {
  return (
    <section className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Home />
      </div>

    </section>
  )
}

export default App;
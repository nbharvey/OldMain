import {Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import Menu from "./pages/menu/Menu";
import Drinks from "./pages/menu/Drinks";
import Food from "./pages/menu/Food";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNavbar />

 <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />

        <Route path="/jobs" element={<Jobs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/drinks" element={<Drinks />} />
          <Route path="/menu/food" element={<Food />} />
        
          <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />

        
        <Route path="/events" element={<Events />} />"

          
      </Routes>
</main>

      <MyFooter />
    </>
  
  );
}

export default App;
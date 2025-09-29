import {Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNavbar />

 <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
</main>

      <MyFooter />
    </>
  
  );
}

export default App;
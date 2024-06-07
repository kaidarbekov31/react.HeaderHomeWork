import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Features from "./pages/Features/Features";
import PagesTwo from "./pages/PagesTwo/PagesTwo";
import Blog from "./pages/Blog/Blog";
import LookBook from "./pages/LookBook/LookBook";
import Header from "./header/header";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/lookBook" element={<LookBook />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pages" element={<PagesTwo />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;

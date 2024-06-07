import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/main";
import PageOne from "./pages/pageOne/pageOne";
import PagesTwo from "./pages/pagesTwo/pagesTwo";
import Header from "./header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page1" element={<PageOne />} />
        <Route path="/page2" element={<PagesTwo />} />
      </Routes>
    </div>
  );
}

export default App;

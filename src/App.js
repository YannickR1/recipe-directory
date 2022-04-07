import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// page components
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";

// components
import Navbar from "./components/navbar/Navbar";

// style
import "./App.css";
import { ThemeSelector } from "./components/theme-selector/ThemeSelector";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
      <Router>
      <Navbar />
      <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="*" element={<Navigate to="/"/>} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;

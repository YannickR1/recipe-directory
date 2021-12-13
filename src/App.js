import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// page components
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";

// style
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="*" element={<Navigate to="/"/>} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;

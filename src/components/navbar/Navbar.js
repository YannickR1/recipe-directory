import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

//styles
import "../navbar/Navbar.css";

//components
import Searchbar from "../searchbar/Searchbar";

export default function Navbar() {

  const { color } = useTheme()

  return (
    <div className="navbar" style={{ background: color }}>
      <nav >
        <Link to="/" className="brand">
          <h1>Cooking directory</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create recipe</Link>
      </nav>
    </div>
  );
}

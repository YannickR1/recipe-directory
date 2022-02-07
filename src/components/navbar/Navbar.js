import { Link } from "react-router-dom";

//styles
import "../navbar/Navbar.css";
import Searchbar from "../searchbar/Searchbar";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking directory</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create recipe</Link>
      </nav>
    </div>
  );
}

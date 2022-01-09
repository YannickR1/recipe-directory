import { Link } from "react-router-dom";

//styles
import '../navbar/Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="brand">
        <h1>Cooking directory</h1>
      </Link>
      <Link to="/create">
          Create recipe
      </Link>
    </div>
  );
}

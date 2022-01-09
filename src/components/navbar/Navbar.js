import { Link } from "react-router-dom";

//styles
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link>
        <h1>Cooking directory</h1>
      </Link>
    </div>
  );
}

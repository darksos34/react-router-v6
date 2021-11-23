import {Link, Outlet} from "react-router-dom";
import './App.css';

export default function App() {
  return (
      <div>
        <h1>Admin Control Center</h1>

        <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem"
            }}
        >
          <Link to="/medewerkers">Medewerkers</Link> |{" "}
          <Link to="/uitgaven">Uitgaven</Link>
        </nav>
        <Outlet />
      </div>
  );
}
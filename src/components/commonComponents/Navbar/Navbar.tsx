import { Link } from "react-router-dom";
import { NavbarWrapper, NavbarInner, Logo } from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarInner>
        <Logo>Mailing List</Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-subscriber">Add Subscriber</Link>
        </nav>
      </NavbarInner>
    </NavbarWrapper>
  );
};

export default Navbar;

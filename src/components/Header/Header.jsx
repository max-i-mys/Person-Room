import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Authentication from "./Authentication";
import { useDispatch } from "react-redux";
import { visibleModal } from "../../slices/authenticationSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFistRaised } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const handlerShow = (e) => {
    dispatch(visibleModal(e.target.name));
  };
  return (
    <>
      <header className="container">
        <Navbar
          className="header-container"
          collapseOnSelect
          expand="lg"
          variant="dark"
          sticky="top"
        >
          <Container>
            <Navbar.Brand href="/">
              <FontAwesomeIcon icon={faFistRaised} /> FisherRoom
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="header-menu-box">
                <NavLink to="cabinet" className="nav-link">
                  Cabinet
                </NavLink>
                <NavDropdown title="Features" id="collasible-nav-dropdown">
                  <NavLink to="galleries-portfolios" className="dropdown-item">
                    Galleries/Portfolios
                  </NavLink>
                  <NavLink to="shortcodes" className="dropdown-item">
                    Shortcodes
                  </NavLink>
                  <NavLink to="styling" className="dropdown-item">
                    Styling
                  </NavLink>
                </NavDropdown>
                <NavDropdown title="Pages" id="collasible-nav-dropdown">
                  <NavLink
                    to="page-with-left-sidebar"
                    className="dropdown-item"
                  >
                    Page With Left Sidebar
                  </NavLink>
                  <NavLink
                    to="page-with-right-sidebar"
                    className="dropdown-item"
                  >
                    Page With Right Sidebar
                  </NavLink>
                  <NavLink
                    to="page-with-two-sidebars"
                    className="dropdown-item"
                  >
                    Page With Two Sidebars
                  </NavLink>
                  <NavLink to="full-width-page" className="dropdown-item">
                    Fullwidth Page
                  </NavLink>
                  <NavLink to="404-error-page" className="dropdown-item">
                    404 Error Page
                  </NavLink>
                  <NavLink to="attachment-page" className="dropdown-item">
                    Attachment Page
                  </NavLink>
                  <NavLink
                    to="password-protected-page"
                    className="dropdown-item"
                  >
                    Password Protected Page
                  </NavLink>
                  <NavLink to="blank-page" className="dropdown-item">
                    Blank Page
                  </NavLink>
                </NavDropdown>
                <NavDropdown title="BuddyPress" id="collasible-nav-dropdown">
                  <NavLink to="activity" className="dropdown-item">
                    Activity
                  </NavLink>
                  <NavLink to="members" className="dropdown-item">
                    Members
                  </NavLink>
                  <NavLink to="groups" className="dropdown-item">
                    Groups
                  </NavLink>
                  <NavLink to="forums" className="dropdown-item">
                    Forums
                  </NavLink>
                </NavDropdown>
                <NavLink to="blog" className="nav-link">
                  Blog
                </NavLink>
                <NavLink to="cont" className="nav-link">
                  Contact
                </NavLink>
              </Nav>
              <Nav className="header-btn-box">
                <Button
                  variant="success"
                  name="signIn"
                  type="button"
                  onClick={(e) => handlerShow(e)}
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  name="signUp"
                  type="button"
                  onClick={(e) => handlerShow(e)}
                >
                  Sign Up
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Authentication />
      </header>
    </>
  );
}

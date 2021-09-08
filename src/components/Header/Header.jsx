import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Authentication from "./Authentication";
import {useDispatch} from "react-redux";
import {visibleModal} from "../../slices/authenticationSlice";

export default function Header() {
  const dispatch = useDispatch()
  const handlerShow = (e) => {
    dispatch(visibleModal(e.target.name))
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
            <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="header-menu-box">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Features" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#galleries-portfolios">
                    Galleries/Portfolios
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#shortcodes">
                    Shortcodes
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#styling">Styling</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pages" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#page-with-left-sidebar">
                    Page With Left Sidebar
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#page-with-right-sidebar">
                    Page With Right Sidebar
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#page-with-two-sidebars">
                    Page With Two Sidebars
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#full-width-page">
                    Fullwidth Page
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#404-error-page">
                    404 Error Page
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#attachment-page">
                    Attachment Page
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#password-protected-page">
                    Password Protected Page
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#blank-page">
                    Blank Page
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="BuddyPress" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#activity">Activity</NavDropdown.Item>
                  <NavDropdown.Item href="#members">Members</NavDropdown.Item>
                  <NavDropdown.Item href="#groups">Groups</NavDropdown.Item>
                  <NavDropdown.Item href="#forums">Forums</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#cont">Contact</Nav.Link>
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

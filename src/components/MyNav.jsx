import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav() {
  return (
<Navbar bg="white" expand="lg" fixed="top">
      <Container fluid>
      <Navbar.Brand href="#home">
            <img
              alt="logo"
              src="https://www.ibs.it/assets/loghi-editori/mondadori.jpg"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
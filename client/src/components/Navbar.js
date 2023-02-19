import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Activity } from 'react-bootstrap-icons'

const StyledNavbar = () => {
  return (
    <Navbar style={{borderBottom: 'solid 2px #ECECEC', padding: '8px 30px'}} expand="lg">
        <Navbar.Brand href="#home" style={{ paddingBottom: '0px', display: 'flex', alignItems: 'center' }}><Activity className="fa-lg" style={{ borderRadius: '50%', border: '1px solid black', marginRight: '10px', marginBottom: '4px'}} /><h3 style={{ fontWeight: '500' }}>Surge Protector</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='me-auto'>
            <Nav.Link href="/"><h4 style={{ fontSize: '18px', marginTop: '4px'}}>Home</h4></Nav.Link>
            <Nav.Link href="#link"><h4 style={{ fontSize: '18px', marginTop: '4px'}}>Messages</h4></Nav.Link>
            <NavDropdown title="Other Videos" id="basic-nav-dropdown" style={{ fontSize: '18px', fontWeight: '450', marginTop: '1px'}}>
              <NavDropdown.Item href="/lightsaber">Lightsaber</NavDropdown.Item>
              <NavDropdown.Item href="/drone">Drone Footage</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default StyledNavbar;
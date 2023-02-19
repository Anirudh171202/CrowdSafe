import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Activity } from 'react-bootstrap-icons'

function BasicExample() {
  return (
    <Navbar style={{borderBottom: 'solid 2px #ECECEC', padding: '8px 30px'}} expand="lg">
        <Navbar.Brand href="#home" style={{ paddingBottom: '0px', display: 'flex', alignItems: 'center' }}><Activity class="fa-lg" style={{ borderRadius: '50%', border: '1px solid black', marginRight: '10px', marginBottom: '4px'}} /><h3 style={{ fontWeight: '500' }}>Surge Protector</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='ms-auto'>
            <Nav.Link href="#home"><h4 style={{ fontSize: '18px', marginTop: '4px'}}>Home</h4></Nav.Link>
            <Nav.Link href="#link"><h4 style={{ fontSize: '18px', marginTop: '4px'}}>Messages</h4></Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown" style={{ fontSize: '18px', fontWeight: '450', marginTop: '1px'}}>
              <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Camera Access</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Emergency</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicExample;
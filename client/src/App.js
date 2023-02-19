import Container from 'react-bootstrap/esm/Container';
import './App.css';
import Grid from './components/Grid/Grid';
import SideBar from './components/SideBar/SideBar';
import BasicExample from './components/Navbar';
import Row from 'react-bootstrap/esm/Row';

function App() {
  return (
    <div className='app'>
      <Container fluid style={{ padding: '0px'}}>
        <BasicExample></BasicExample>
        <Row style={{maxHeight: '100%'}}>
          <SideBar lg={6}/>
          <Grid/>
        </Row>
      </Container>
    </div>
  );
}

/**<div style={{ display: 'flex', flexDirection: 'column'}}> */

export default App;
